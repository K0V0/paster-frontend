import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../services/board.service";
import {BoardItem, BoardItemResponseDTO} from "../../dtos/board.dto.interface";
import {DtoMapperService, Schema} from "../../../_CoreModule/services/dto-mapper.service";

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {
  title = 'copy/paste board';
  mapper = new DtoMapperService<BoardItemResponseDTO, BoardItem>();

  constructor(private boardService: BoardService) {
    //this.boardItems = [];
    /*this.mapper.setSchema(new Map<string, any>([
      ["id", false]
    ]))*/
    this.mapper.setRules({
      id: null,
      status: null,
      timestamp: (x:number) => { return new Date(x*1000); }
      //timestamp: function(x:number) { return new Date(x*1000); }
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
      data.items.forEach(item => {
        let dataItem: BoardItem = this.mapper.remap(item);
        console.log(dataItem);
      });
    });
  }

}
