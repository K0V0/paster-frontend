import { ResponseDTO } from "../_abstract/interfaces/dtos.interface";

export interface BoardItemsResponseDTO extends ResponseDTO {
  items: BoardItemResponseDTO[];
}

export interface BoardItemResponseDTO extends ResponseDTO {
  id: number;
  text: string;
  preview: string;
  timestamp: number;
  isLarge: boolean;
}

export interface BoardItem {
  id: number;
  preview: string;
  timestamp: string;
}
