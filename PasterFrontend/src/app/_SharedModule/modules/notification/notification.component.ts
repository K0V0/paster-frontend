import { NotificationService } from './notification.service';
import { Component, OnInit } from "@angular/core";
import { NotificationAnimations } from './notification.animations';

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

  private notify(): void {
    this.notidicationService.notificationState().subscribe(
      (data) => {
        this.text = data;
      }
    )
  }

}
