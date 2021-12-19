import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpXhrBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

// TODO generifikovat clasu
@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private static readonly BASE_URL = "http://0.0.0.0:4004/";

  protected constructor(private http: HttpClient) {}

  private headers = {
    'Content-Type': 'application/json',
  };

  public post<Type>(endpoint: String, params: JsonObject, headers = {}): Observable<Type> {
    return this.http.post<Type>(
      RequestService.BASE_URL + endpoint,
      params,
      { headers: new HttpHeaders({ ...this.headers, ...headers }) });
  }

}
