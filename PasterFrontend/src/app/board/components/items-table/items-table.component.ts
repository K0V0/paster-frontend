import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../services/board.service";
import {BoardItem, BoardItemResponseDTO, BoardItems} from "../../dtos/board.dto.interface";
import {DtoMapperUtil, Schema} from "../../../_CoreModule/utils/dto-mapper.util";

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {
  mapper: DtoMapperUtil<BoardItemResponseDTO, BoardItem>;

  constructor(
    private boardService: BoardService
  ) {
    this.mapper = new DtoMapperUtil<BoardItemResponseDTO, BoardItem>();
    // TODO sformatovat cas a odskusat deal so zonami a zimnym/letnym
    this.mapper.setRules({
      id: null,
      status: null,
      timestamp: (x:number) => new Date(x*1000),
    })
  }

  ngOnInit(): void {
    this.refreshContent();
  }

  refreshContent(): void {
    this.boardService.getItems()
    .subscribe((data) => {
      console.log("prijate itemy");
      console.log(data);
      let boardItems: BoardItem[] = data.items.map(item => this.mapper.remap(item));
      console.log(boardItems);
    });
  }

}
