import { Response } from "../../../../_Base/interfaces/base.dto.interface";

export interface LoginResponseDTO extends Response {
  jwtToken: string;
}
