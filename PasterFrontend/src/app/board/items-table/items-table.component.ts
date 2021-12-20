import {Component, OnInit} from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {
  title = 'copy/paste board';

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.refreshContent();
  }

  refreshContent(): void {
    this.boardService.getItems()
    .subscribe((data) => {
      console.log("prijate itemy");
      console.log(data);
    });
  }

}
