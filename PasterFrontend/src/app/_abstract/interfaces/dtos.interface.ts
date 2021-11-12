export interface Response {
  status: string;
}

export interface Error extends Response {
  message?: string;
  messages?: Map<string, string>;
}

export interface Login extends Response {
  jwtToken: string;
}

export interface Register extends Response {

}
