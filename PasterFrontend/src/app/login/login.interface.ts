import { ResponseDTO } from "../_abstract/interfaces/dtos.interface";

export interface LoginResponseDTO extends ResponseDTO {
  jwtToken: string;
}
