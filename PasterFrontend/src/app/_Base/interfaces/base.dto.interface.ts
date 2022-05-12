import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

export interface IHash {
  [details: string] : any;
}

export interface Response {
  status: string;
}

export interface Error extends Response {
  message?: string;
  messages?: Map<string, string>;
}

export interface ServerError {
  serverFormErrorMessage: JsonObject;
}

export interface ServerErrors {
  serverFieldsErrorMessages: JsonObject;
}

export interface Ws {

}
export interface WsRefresh extends Ws {
  autosync: boolean;
}
export interface Language {
  langCode: string;
  langName: string;
}

export interface Cookie {
  marketing: boolean;
}
