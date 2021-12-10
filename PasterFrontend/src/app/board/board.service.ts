import { Injectable } from "@angular/core";
import { RequestService } from "../_abstract/services/request.service";
import { Observable } from "rxjs";
import { JwtService } from "../_global/services/jwt.service";

@Injectable({
  providedIn: 'root',
})
export class BoardService extends RequestService {
  title = 'boardService';

  constructor(
    private jwtService: JwtService
  ) {
    super();
  }

  // TODO odoslat jwt token s requestom
  sendText(text: string): Observable<any> {
    return this.post(
      'api/v1/board/item',
      { item: text });
  }

}
