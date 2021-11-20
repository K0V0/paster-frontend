import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

export interface ServerError {
  serverFormErrorMessage: JsonObject;
}

export interface ServerErrors {
  serverFieldsErrorMessages: JsonObject;
}
