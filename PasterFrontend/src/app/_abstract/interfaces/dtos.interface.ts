export interface ResponseDTO {
  status: string;
}

export interface ErrorDTO extends ResponseDTO {
  message?: string;
  messages?: Map<string, string>;
}

export interface Model {

}

