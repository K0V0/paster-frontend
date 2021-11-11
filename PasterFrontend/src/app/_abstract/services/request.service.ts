import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpXhrBackend} from "@angular/common/http";
import { Observable } from "rxjs";
import {Response} from "../interfaces/dtos.interface";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private static readonly BASE_URL = "http://0.0.0.0:4004/";
  protected http: HttpClient;

  constructor() {
    this.http = new HttpClient(new HttpXhrBackend({ build: () => new XMLHttpRequest() }));
  }

  private headers = {
    'Content-Type': 'application/json',
  };

  protected post(endpoint: String, params: JsonObject, headers: JsonObject): Observable<Response> {
    return this.http.post<Response>(RequestService.BASE_URL + endpoint,
      params,
      { headers: new HttpHeaders({ ...this.headers, ...headers }) });
  }

}
