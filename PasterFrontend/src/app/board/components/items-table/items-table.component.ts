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
  title = 'copy/paste board';

  constructor(
    private boardService: BoardService,
    private dtoMapperService: DtoMapperUtil<BoardItemResponseDTO, BoardItem>
  ) {
    this.dtoMapperService.setRules({
      id: null,
      status: null,
      timestamp: (x:number) => new Date(x*1000),
      //large: null
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
      /*data.items.forEach(item => {
        let dataItem: BoardItem = this.mapper.remap(item);
        //console.log(dataItem);
      });*/
      let boardItems: BoardItem[] = data.items.map(item => this.dtoMapperService.remap(item));
      console.log(boardItems);
    });
  }

}
