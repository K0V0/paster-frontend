import { Subject } from 'rxjs';
import { TranslateService } from './../translate/translate.service';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private openedState: Subject<string>;

  constructor(private translateService: TranslateService) {
    this.openedState = new Subject;
  }

  notify(message: string): void {
    this.openedState.next(this.translateService.translate(message));
    this.bounceNotification();
  }

  notificationState(): Subject<string> {
    return this.openedState;
  }

  // TODO prerobit, prasarna maximalna ako sa da
  private bounceNotification(): void {
    let totok = this;
    setTimeout(function() {
      totok.openedState.next(undefined);
    }, 5000);
  }

}
