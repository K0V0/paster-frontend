export interface Response {
  status: string;
}

export interface Error extends Response {
  message?: string;
  messages?: Map<string, string>;
}

