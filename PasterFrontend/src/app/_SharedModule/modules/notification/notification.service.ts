import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private openedState: Subject<string>;
  private timeoutId: any;

  constructor() {
    this.openedState = new Subject;
  }

  notify(message: string): void {
    this.closeNotification();
    this.openedState.next(message);
    this.bounceNotification();
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
