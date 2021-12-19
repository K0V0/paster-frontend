import { Injectable } from "@angular/core";
import { RequestService } from "../_global/services/request.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  title = 'boardService';

  constructor(private requestService: RequestService) {}

  // TODO odoslat jwt token s requestom
  sendText(text: string): Observable<any> {
    return this.requestService.post(
      'api/v1/board/item',
      { text: text });
  }

}
