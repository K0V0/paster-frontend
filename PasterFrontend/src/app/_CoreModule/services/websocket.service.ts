import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { WsRefresh } from './../../_Base/interfaces/base.dto.interface';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService/*<RQdto, RSdto>*/ {

  private readonly webSocket: Observable<WsRefresh>;

  public constructor(private jwtService: JwtService) {
    this.webSocket = webSocket(environment.websocketUrl + "?jwtToken=" + jwtService.getToken());
  }

  public getWebSocket(): Observable<WsRefresh> {
    return this.webSocket;
  }

}
