import { Response } from "../_abstract/interfaces/dtos.interface";

export interface Login extends Response {
  jwtToken: string;
}
