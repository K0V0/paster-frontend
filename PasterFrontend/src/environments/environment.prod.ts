export const environment = {
  production: true,
  backendUrl: "https://api.paster.cloud",
  websocketUrl: "wss://api.paster.cloud/websocket",
  apiVersion: 1,
  apiKey: "hDXb3efYoLpXGDhXfKGuv2t9qT0eArr0",
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ]
};
