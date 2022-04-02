import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  // TODO zablokovat zobrazenie widgetu ak niektora z adries
  private static readonly widgetsUrls: string[] = ["/register", "/login", "/logout"];

  private widgetStates: Map<string, boolean>;

  constructor() {
    this.widgetStates = new Map;
  }

  public getStates(): Map<string, boolean> {
    return this.widgetStates;
  }

  public clearAll(): void {
    this.widgetStates.clear();
  }

  public toggleState(url: string): void {
    this.setState(url, !this.getState(url));
    this.clearOtherSetGiven(url);
  }

  public isWidgetUrl(url: string): boolean {
    return WidgetsService.widgetsUrls.includes(url);
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
