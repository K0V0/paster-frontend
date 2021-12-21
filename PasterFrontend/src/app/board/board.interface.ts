import { Response } from "../_abstract/interfaces/dtos.interface";

export interface BoardItemResponseDTO extends Response {
  id: number;
  text: string;
  preview: string;
  timestamp: number;
  isLarge: boolean;
}
