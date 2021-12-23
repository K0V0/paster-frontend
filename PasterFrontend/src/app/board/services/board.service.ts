import { Injectable } from "@angular/core";
import { RequestService } from "../../_CoreModule/services/request.service";
import { Observable } from "rxjs";
import { BoardItemsResponseDTO } from "../dtos/board.dto.interface";

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

  //deleteItem(id: number): Observable<null> {
  deleteItem(id: number): Observable<null> {
    return this.requestService.delete('api/v1/board/item/' + id);
  }

  // TODO tahat api verziu zo settings
}
