import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "../../../_Base/components/base.component";
import { BoardService } from "../../services/board.service";

@Component({
  selector: 'app-board-send-item',
  templateUrl: './send-item.component.html',
  styleUrls: ['./send-item.component.scss']
})
export class SendItemComponent extends BaseComponent {
  title = 'copy/paste board';
  text: FormControl;
  board: FormGroup;

  constructor(
    private boardService: BoardService
  ) {
    super();
    this.text = new FormControl("", Validators.required)
    this.board = new FormGroup({
      "text": this.text
    })
  }

  sendText() {
    this.boardService
      .sendText(this.board.value.text)
      .subscribe(
        (data) => {
          // no data from backend, just status code
        },
        (error) => {
          this.setAllServerErrors(error);
        },
        () => {
          this.clearAllServerErrors();
          // TODO just put data into table do not fire get request to refresh content
        });
  }

}
