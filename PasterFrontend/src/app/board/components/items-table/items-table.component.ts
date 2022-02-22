// angular stuff
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
// my imports
import { WsRefresh } from './../../../_Base/interfaces/base.dto.interface';
import { BoardService } from "../../services/board.service";
import { BoardItem, BoardItemResponseDTO, BoardItems } from "../../dtos/board.dto.interface";
import { DtoMapperUtil } from "../../../_CoreModule/utils/dto-mapper.util";
import { WebsocketService } from "../../../_CoreModule/services/websocket.service";
import { TableItemsAnimations } from './items-table-animations';

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss'],
  animations: [ TableItemsAnimations.tableItemAppendAnimation ]
})
export class ItemsTableComponent implements OnInit {
  mapper: DtoMapperUtil<BoardItemResponseDTO, BoardItem>;
  boardItems: BoardItems;

  constructor(
    private boardService: BoardService,
    private websocketService: WebsocketService,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.mapper = new DtoMapperUtil<BoardItemResponseDTO, BoardItem>();
    // TODO sformatovat cas a odskusat deal so zonami a zimnym/letnym
    // TODO lokalizacia formatu casu a datumu (America/EU verzia)
    // TODO skontrolovat nastavenie backendu pri pouzivani casu - ci je zhodne s databazou,
    //  pripadne prerobit backend len na timestamp
    this.mapper.setRules({
      status: null,
      timestamp: (x:number) => formatDate(new Date(x), 'dd. MM. yyyy', this.locale),
    })
    this.boardItems = <BoardItems>{};
  }

  ngOnInit(): void {
    //this.refreshContent();
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

  private refreshContent(): void {
    console.log("refreshContent");
    this.boardService.getItems().subscribe((data) => {
      if (this.boardItems.items === undefined) {
        // first run
        this.boardItems.items = data.items.map(item => this.mapper.remap(item));
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
      (err: any) => { console.log('message received: ' + err); }, // Called if at any point WebSocket API signals some kind of error.
      () => { console.log('complete'); } // Called when connection is closed (for whatever reason).
    );
  }

}
