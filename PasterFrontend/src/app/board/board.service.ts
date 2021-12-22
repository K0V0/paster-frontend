import { Injectable } from "@angular/core";
import { RequestService } from "../_global/services/request.service";
import { Observable } from "rxjs";
import { BoardItemsResponseDTO } from "./board.interface";

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  title = 'boardSendItemService';

  constructor(private requestService: RequestService) {}

  sendText(text: string): Observable<null> {
    return this.requestService.post(
      'api/v1/board/item',
      { text: text });
  }

  getItems(): Observable<BoardItemsResponseDTO> {
    console.log("getItems()");
    return this.requestService.get<BoardItemsResponseDTO>('api/v1/board/items');
  }

  // TODO tahat api verziu zo settings
}
