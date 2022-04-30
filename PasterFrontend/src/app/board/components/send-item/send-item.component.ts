import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "../../../_Base/components/base.component";
import { BoardService } from "../../services/board.service";

@Component({
  selector: 'app-board-send-item',
  templateUrl: './send-item.component.html',
  styleUrls: ['./send-item.component.scss']
})
export class SendItemComponent extends BaseComponent implements OnInit {
  title = 'copy/paste board';
  text: FormControl;
  board: FormGroup;
  showClearButton: boolean;

  constructor(
    private boardService: BoardService,
    protected router: Router
  ) {
    super(router);
    this.text = new FormControl("", Validators.required)
    this.board = new FormGroup({
      "text": this.text
    })
    this.showClearButton = false;
  }

  ngOnInit(): void {
    this.trackClearButtonState();
  }

  sendText() {
    this.boardService
      .sendText(this.board.value.text)
      .subscribe(
        (data) => {
          // no data from backend, just status code
          this.text.setValue("");
        },
        (error) => {
          this.setAllServerErrors(error);
        },
        () => {
          this.clearAllServerErrors();
          // TODO just put data into table do not fire get request to refresh content
        });
  }

  deleteText(event: Event): void {
    event.preventDefault();
    this.text.setValue("");
  }

  trackClearButtonState(): void {
    this.text.valueChanges.subscribe((data: string) => {
      this.showClearButton = data.length > 0;
    });
  }

}
