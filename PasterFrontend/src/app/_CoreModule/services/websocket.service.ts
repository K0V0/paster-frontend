import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { WsRefresh } from './../../_Base/interfaces/base.dto.interface';
import { JwtService } from './jwt.service';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService/*<RQdto, RSdto>*/ {

  private readonly ENDPOINT: string;

  private ws: Subject<WsRefresh>;

  public constructor(private jwtService: JwtService) {
    this.ENDPOINT = environment.websocketUrl + "?jwtToken=" + jwtService.getToken() + "&apiKey=" + environment.apiKey;
    this.ws = webSocket<WsRefresh>(this.ENDPOINT);
  }

  public getWebSocket(): Observable<WsRefresh> {
    return this.ws.pipe(shareReplay());
  }

  public getNewWebsocket(): Observable<WsRefresh> {
    this.ws = webSocket<WsRefresh>(this.ENDPOINT);
    return this.ws.pipe(shareReplay());
  }

  public sendMessage(msg: string): void {
    //TODO dummy implementacia
    let m: WsRefresh = {
      autosync: true
    }
    this.ws.next(m);
  }

}
