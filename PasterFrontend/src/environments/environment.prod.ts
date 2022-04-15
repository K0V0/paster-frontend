export const environment = {
  production: true,
  backendUrl: "https://api.paster.cloud",
  websocketUrl: "ws://api.paster.cloud/websocket",
  apiVersion: 1,
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ]
};
