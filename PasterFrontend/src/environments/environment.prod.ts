
export interface EnviromentVars {
  production: boolean,
  apiUrl: string,
  websocketUrl: string,
  apiVersion: string,
  apiKey: string,
  excludedJwtInterceptorEndpoints: string[],
  deviceType: string
}

export const environment: EnviromentVars = {
  production: false,
  // @ts-ignore
  backendUrl: window['env']['apiUrl'] || "https://0.0.0.0:4004",
  // @ts-ignore
  websocketUrl: window['env']['websocketUrl'] || "wss://0.0.0.0:4004/websocket",
  // @ts-ignore
  apiVersion: window['env']['apiVersion'] || 1,
  // @ts-ignore
  apiKey: window['env']['apiKey'] || "hDXb3efYoLpXGDhXfKGuv2t9qT0eArr0",
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ],
  deviceType: "webapp"
};
