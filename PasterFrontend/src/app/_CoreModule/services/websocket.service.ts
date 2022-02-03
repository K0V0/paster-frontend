import { WsRefresh } from './../../_Base/interfaces/base.dto.interface';
import { JwtService } from './jwt.service';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root',
})
export class WebsocketService/*<RQdto, RSdto>*/ {
  private static readonly BASE_URL = "ws://0.0.0.0:4004/websocket";

  private readonly webSocket: Observable<WsRefresh>;

  public constructor(private jwtService: JwtService) {
    this.webSocket = webSocket(WebsocketService.BASE_URL + "?jwtToken=" + jwtService.getToken());
  }

  public getWebSocket(): Observable<WsRefresh> {
    return this.webSocket;
  }

}
