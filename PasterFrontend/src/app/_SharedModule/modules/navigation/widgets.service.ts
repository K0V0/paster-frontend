import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  private static readonly widgetsUrls: string[] = ["/register", "/login", "/logout", "/language"];

  private widgetStates: Map<string, boolean>;
  private openedState: Subject<boolean>;
  private blocked: boolean;

  constructor() {
    this.widgetStates = new Map;
    this.openedState = new Subject();
    this.blocked = false;
  }

  public getStates(): Map<string, boolean> {
    return this.widgetStates;
  }

  public clearAll(): void {
    this.widgetStates.clear();
    this.emitStateEvent();
  }

  public toggleState(url: string): void {
    this.setState(url, !this.getState(url));
    this.clearOtherSetGiven(url);
    this.emitStateEvent();
  }

  public getStateObservable(): Subject<boolean> {
    return this.openedState;
  }

  public isWidgetUrl(url: string): boolean {
    return WidgetsService.widgetsUrls.includes(url);
  }

  public setBlocked(bool: boolean): void {
    this.blocked = bool;
  }

  public isBlocked(): boolean {
    return this.blocked;
  }

  private emitStateEvent(): void {
    this.openedState.next(this.isAnyActive());
  }

  private isAnyActive(): boolean {
    for(let key of Array.from( this.widgetStates.keys()) ) {
      if (this.widgetStates.get(key) === true) {
        return true;
      }
    }
    return false;
  }

  private setState(url: string, state: boolean): void {
    this.widgetStates.set(url, state);
  }

  private getState(url: string): boolean {
    return this.widgetStates.get(url) || false;
  }

  private clearOtherSetGiven(url: string): void {
    for(let key of Array.from( this.widgetStates.keys()) ) {
      if (key != url) {
        this.widgetStates.set(key, false);
      }
    }
  }

}
