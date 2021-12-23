import { ResponseDTO } from "../../_Base/interfaces/base.dto.interface";

export interface LoginResponseDTO extends ResponseDTO {
  jwtToken: string;
}
