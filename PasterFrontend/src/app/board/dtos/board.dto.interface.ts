import { Response } from "../../_Base/interfaces/base.dto.interface";

export interface BoardItemsResponseDTO extends Response {
  items: BoardItemResponseDTO[];
}

export interface BoardItemResponseDTO extends Response {
  id: number;
  text: string;
  preview: string;
  timestamp: number;
  isLarge: boolean;
  platform: string;
  deviceName: string;
}

export interface BoardItems {
  items: BoardItem[];
}

export interface BoardItem {
  id: number;
  preview: string;
  timestamp: string;
  text: string;
  deviceName: string;
  platform: string;
}
