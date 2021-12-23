import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

export interface ResponseDTO {
  status: string;
}

export interface ErrorDTO extends ResponseDTO {
  message?: string;
  messages?: Map<string, string>;
}

export interface ServerError {
  serverFormErrorMessage: JsonObject;
}

export interface ServerErrors {
  serverFieldsErrorMessages: JsonObject;
}
