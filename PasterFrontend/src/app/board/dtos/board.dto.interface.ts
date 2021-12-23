import { ResponseDTO } from "../../_Base/interfaces/base.dto.interface";

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
