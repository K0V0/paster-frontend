import { Injectable } from "@angular/core";
import { RequestService } from "../_global/services/request.service";
import { Observable } from "rxjs";
import {BoardItemResponseDTO,} from "./board.interface";

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  title = 'boardSendItemService';

  constructor(private requestService: RequestService) {}

  sendText(text: string): Observable<BoardItemResponseDTO> {
    return this.requestService.post(
      'api/v1/board/item',
      { text: text });
  }

  getItems(): Observable<BoardItemResponseDTO[]> {
    console.log("getItems()");
    return this.requestService.get('api/v1/board/items');
  }

  // TODO tahat api verziu zo settings
}
