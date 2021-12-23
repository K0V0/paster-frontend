// angular stuff
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
// my imports
import { BoardService } from "../../services/board.service";
import { BoardItem, BoardItemResponseDTO, BoardItems } from "../../dtos/board.dto.interface";
import { DtoMapperUtil } from "../../../_CoreModule/utils/dto-mapper.util";

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
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.mapper = new DtoMapperUtil<BoardItemResponseDTO, BoardItem>();
    // TODO sformatovat cas a odskusat deal so zonami a zimnym/letnym
    // TODO lokalizacia formatu casu a datumu (America/EU verzia)
    this.mapper.setRules({
      status: null,
      timestamp: (x:number) => formatDate(new Date(x), 'dd. MM. yyyy', this.locale),
    })
    this.boardItems = <BoardItems>{};
  }

  ngOnInit(): void {
    this.refreshContent();
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

}
