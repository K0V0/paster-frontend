import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "../_abstract/components/base.component";
import { BoardService } from "./board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends BaseComponent implements OnInit {
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

  ngOnInit(): void {
    // ziskat obsah ?
  }

  sendText() {
    this.boardService
      .sendText(this.board.value.text)
      .subscribe(
        (data) => {

        },
        (error) => {
          this.setAllServerErrors(error);
        },
        () => {
          this.clearAllServerErrors();
        });
  }

}
