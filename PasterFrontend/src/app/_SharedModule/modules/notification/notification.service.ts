import { TranslateService } from './../translate/translate.service';
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private openedState: Subject<string>;
  private timeoutId: any;

  constructor(
    private translateService: TranslateService
  ) {
    this.openedState = new Subject;
  }

  notify(message: string): void {
    this.closeNotification();
    this.openedState.next(message);
    this.bounceNotification();
  }

  notifyTranslated(messageId: string): void {
    this.notify(this.translateService.translate(messageId));
  }

  closeNotification(): void {
    clearTimeout(this.timeoutId);
    this.openedState.next(undefined);
  }

  notificationState(): Subject<string> {
    return this.openedState;
  }

  private bounceNotification(): void {
    let totok = this;
    this.timeoutId = setTimeout(function() {
      totok.openedState.next(undefined);
    }, 5000);
  }

}
