import { NotificationService } from './notification.service';
import { Component, OnInit } from "@angular/core";
import { NotificationAnimations } from './notification.animations';

//TODO v sucasnej impl podporovana jedna notifikacia naraz, bude treba stack do buducnosti ?
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [ NotificationAnimations.showAnimation ]
})
export class NotificationComponent implements OnInit {
  text: string;

  constructor(
    private notidicationService: NotificationService,
  ) {
    this.text = "";
  }

  ngOnInit(): void {
    this.notify();
  }

  hideNotification(): void {
    this.notidicationService.closeNotification();
  }

  private notify(): void {
    this.notidicationService.notificationState().subscribe(
      (data) => {
        this.text = data;
      }
    )
  }

}
