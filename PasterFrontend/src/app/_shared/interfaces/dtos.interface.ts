export interface Error {
  status: string;
  message?: string;
  messages?: Map<string, string>;
}
