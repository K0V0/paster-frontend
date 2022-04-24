import { NotificationService } from './../../_SharedModule/modules/notification/notification.service';
import { BoardService } from './../services/board.service';
import { WidgetsService } from './../../_SharedModule/modules/navigation/widgets.service';
import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private widgetsService: WidgetsService,
    private boardService: BoardService,
    private notificationService: NotificationService
    ) {}

  ngOnInit(): void {
    this.widgetsService.clearAll();
  }

  @HostListener('paste', ['$event'])
  onPaste(e: ClipboardEvent) {
    let clipboardData = e.clipboardData; //|| window.clipboardData;
    this.sendText(clipboardData?.getData('text'));
    this.notificationService.notify("board.page.notifications.textPasted");
  }

  sendText(text: string | undefined | null) {
    if (text !== undefined && text !== null) {
      this.boardService
      .sendText(text)
      .subscribe(
        (data: any) => {
          // no data from backend, just status code
          console.log(data);
        },
        (error: any) => {
        },
        () => {
        });
    }
  }

}







