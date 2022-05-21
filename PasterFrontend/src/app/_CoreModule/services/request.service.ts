import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService/*<RQdto, RSdto>*/ {

  public constructor(private http: HttpClient) {}

  private headers = {
    'Content-Type': 'application/json',
    'x-auth-token': environment.apiKey
  };

  private apiKeyHeader = {
    'x-auth-token': environment.apiKey
  };

  public post<RSdto>(endpoint: String, params: JsonObject, headers = {}): Observable<RSdto> {
    return this.http.post<RSdto>(
      environment.backendUrl + "/" + endpoint,
      params,
      { headers: new HttpHeaders({ ...this.headers, ...headers }) });
  }

  // TODO params pre get request
  public get<RSdto>(endpoint: String, params = {}, headers = {}): Observable<RSdto> {
    return this.http.get<RSdto>(
      environment.backendUrl + "/" + endpoint,
      { headers: new HttpHeaders({ ...this.apiKeyHeader, ...headers }) }
    );
  }

  // TODO return potvrdenie o vykonani akcie, resp. vyuziv websocket api na backende
  public delete<RSdto>(endpoint: String): Observable<RSdto> {
    return this.http.delete<RSdto>(
      environment.backendUrl + "/" + endpoint,
      { headers: new HttpHeaders({ ...this.apiKeyHeader }) }
    );
  }

}
