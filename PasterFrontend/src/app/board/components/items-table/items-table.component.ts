import { TranslateService } from './../../../_SharedModule/modules/translate/translate.service';
import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { WebsocketService } from "../../../_CoreModule/services/websocket.service";
import { DtoMapperUtil } from "../../../_CoreModule/utils/dto-mapper.util";
import { BoardItem, BoardItemResponseDTO, BoardItems } from "../../dtos/board.dto.interface";
import { BoardService } from "../../services/board.service";
import { IHash, WsRefresh } from './../../../_Base/interfaces/base.dto.interface';
import { NotificationService } from './../../../_SharedModule/modules/notification/notification.service';
import { TableItemsAnimations } from './items-table-animations';

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss'],
  animations: [ TableItemsAnimations.tableItemAppendAnimation, TableItemsAnimations.hideFullTextButtonAppendAnimation ]
})
export class ItemsTableComponent implements OnInit {
  mapper: DtoMapperUtil<BoardItemResponseDTO, BoardItem>;
  boardItems: BoardItems;
  boardItemsExtraTextVisibility: IHash;
  boardItemsJumpClass: Map<number, boolean>;

  constructor(
    private boardService: BoardService,
    private websocketService: WebsocketService,
    private clipboardService: ClipboardService,
    @Inject(LOCALE_ID) private locale: string,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {
    this.mapper = new DtoMapperUtil<BoardItemResponseDTO, BoardItem>();
    // TODO sformatovat cas a odskusat deal so zonami a zimnym/letnym
    // TODO lokalizacia formatu casu a datumu (America/EU verzia)
    this.mapper.setRules({
      status: null,
      timestamp: (x:number) => formatDate(new Date(x), 'dd. MM. yyyy', this.locale),
    })
    this.boardItems = <BoardItems>{};
    this.boardItemsExtraTextVisibility = {};
    this.boardItemsJumpClass = new Map;
  }

  ngOnInit(): void {
    console.log("on init board")
    this.refreshContent();
    this.listenForChangeTrigger();
  }

  // TODO skontrolovat backend, vracat z nackendu aspon true alebo false pre
  //  potvrdenie operacie
  deleteItem(id: number): void {
    console.log("try to delete item: " + id);
    this.boardService.deleteItem(id).subscribe((data) => {
      console.log(data);
    });
  }

  copyToClipboard(id: number): void {
    console.log("copied to clipboard");
    this.clipboardService.copyFromContent(this.getTextById(id));
    this.triggerCopyAnimation(id);
    this.notificationService.notify(
      this.translateService.translate("board.page.notifications.textCopied.part1") +
      " #" + this.getItemOrderById(id) + " " +
      this.translateService.translate("board.page.notifications.textCopied.part2")
      );
  }

  loadWholeText(id: number): void {
    this.boardItemsExtraTextVisibility[id] = !this.boardItemsExtraTextVisibility[id];
  }

  private refreshContent(): void {
    this.boardService.getItems().subscribe((data) => {
      if (this.boardItems.items === undefined) {
        // first run
        let totok = this;
        this.boardItems.items = data.items.map(item => this.mapper.remap(item));
        this.boardItems.items.forEach(function(item) {
          totok.boardItemsExtraTextVisibility[item.id] = false;
        });
      } else {
        // delete case
        let newItemsIds: number[] = data.items.map(d => d.id);
        this.boardItems.items = this.boardItems.items.filter(i => newItemsIds.indexOf(i.id) !== -1);
        // add case
        let currentItemsIds = this.boardItems.items.map(i => i.id);
        data.items
          .filter(i => currentItemsIds.indexOf(i.id) === -1)
          .map(item => this.mapper.remap(item))
          .forEach((item) => {
            this.boardItems.items.unshift(item);
          });
      }
      console.log(this.boardItems.items);
    });
  }

  private listenForChangeTrigger(): void {
    this.websocketService.getWebSocket().subscribe(
      (msg: WsRefresh) => {
        this.refreshContent();
        console.log('message received: ' + msg.autosync);
      },
      (err: any) => {
        console.log('message received: ' + err);
        this.listenForChangeTrigger(); // subscribing ends for some reason after around minute, recall
      },
      () => { console.log('socket connection closed'); }
    );
  }

  private getTextById(id: number): string {
    let result: string = "";
    this.boardItems.items.forEach(function(bi) {
      if (bi.id === id) {
        result = bi.text;
      }
    });
    return result;
  }

  private getItemOrderById(id: number): number {
    let i: number = -1;
    for (let boardItem of this.boardItems.items) {
        i++;
        if (boardItem.id === id) {
          break;
        }
    }
    return i + 1;
  }

  private triggerCopyAnimation(id: number) {
    let jumpClass = this.boardItemsJumpClass.get(id);
    if (jumpClass !== true) {
      this.boardItemsJumpClass.set(id, true);
      let totok = this;
      setTimeout(function(){
        totok.boardItemsJumpClass.set(id, false);
      }, 500);
    }
  }

}
