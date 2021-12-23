import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root',
})
export class RequestService/*<RQdto, RSdto>*/ {
  private static readonly BASE_URL = "http://0.0.0.0:4004/";

  public constructor(private http: HttpClient) {}

  private headers = {
    'Content-Type': 'application/json',
  };

  public post<RSdto>(endpoint: String, params: JsonObject, headers = {}): Observable<RSdto> {
    return this.http.post<RSdto>(
      RequestService.BASE_URL + endpoint,
      params,
      { headers: new HttpHeaders({ ...this.headers, ...headers }) });
  }

  // TODO params pre get request
  public get<RSdto>(endpoint: String, params = {}, headers = {}): Observable<RSdto> {
    return this.http.get<RSdto>(RequestService.BASE_URL + endpoint);
  }

  // TODO return potvrdenie o vykonani akcie, resp. vyuziv websocket api na backende
  public delete<RSdto>(endpoint: String): Observable<RSdto> {
    return this.http.delete<RSdto>(RequestService.BASE_URL + endpoint);
  }

}
