// angular stuff
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
// my imports
import { BoardService } from "../../services/board.service";
import { BoardItem, BoardItemResponseDTO, BoardItems } from "../../dtos/board.dto.interface";
import { DtoMapperUtil } from "../../../_CoreModule/utils/dto-mapper.util";
import { WebsocketService } from "../../../_CoreModule/services/websocket.service";

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
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

  private refreshContent(): void {
    this.boardService.getItems().subscribe((data) => {
      console.log("prijate itemy");
      this.boardItems.items = data.items.map(item => this.mapper.remap(item));
      console.log(this.boardItems.items);
    });
  }

  private listenForChangeTrigger(): void {
    this.websocketService.getWebsocket().subscribe(
      (msg: any) => { console.log('message received: ' + msg); }, // Called whenever there is a message from the server.
      (err: any) => { console.log('message received: ' + err); }, // Called if at any point WebSocket API signals some kind of error.
      () => { console.log('complete'); } // Called when connection is closed (for whatever reason).
    );
  }

}
