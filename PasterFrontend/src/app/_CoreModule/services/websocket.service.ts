import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { Observable } from "rxjs";
import { webSocket } from "rxjs/webSocket";

@Injectable({
  providedIn: 'root',
})
export class WebsocketService/*<RQdto, RSdto>*/ {
  // TODO treba aj tu pouzivat jwt token
  private webSocket = webSocket('ws://0.0.0.0:4004/websocket?jwtToken=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjIsImlhdCI6MTYzODcyNDQwOCwiZXhwIjoxNjcwMjYwNDA4fQ.soHrwWMMi-2jrUhR09nCmX5cUQMh7maNorOnkiaCeBE');

  public getWebsocket(): Observable<any> {
    return this.webSocket;
  }


}
