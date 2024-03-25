import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {webSocket} from "rxjs/webSocket";
import {WsRefresh} from './../../_Base/interfaces/base.dto.interface';
import {JwtService} from './jwt.service';
import {shareReplay} from 'rxjs/operators';
import {ConfigurationService} from "./configuration.service";

@Injectable({
  providedIn: 'root',
})
export class WebsocketService/*<RQdto, RSdto>*/ {

  private readonly ENDPOINT: string;

  private ws: Subject<WsRefresh>;

  public constructor(private jwtService: JwtService, private configurationService: ConfigurationService) {
    this.ENDPOINT = configurationService.websocketUrl + "?jwtToken=" + jwtService.getToken() + "&apiKey=" + configurationService.apiKey;
    this.ws = webSocket<WsRefresh>(this.ENDPOINT);
  }

  public getWebSocket(): Observable<WsRefresh> {
    return this.ws.pipe(shareReplay());
  }

  public sendAutosyncRequest(): void {
    let m: WsRefresh = {
      autosync: true
    }
    this.ws.next(m);
  }

}
