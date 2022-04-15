export const environment = {
  production: true,
  backendUrl: "https://api.paster.cloud",
  websocketUrl: "wss://api.paster.cloud/websocket",
  apiVersion: 1,
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ]
};
