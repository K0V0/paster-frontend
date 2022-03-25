export const environment = {
  production: true,
  backendUrl: "http://kovo.space:4004",
  websocketUrl: "ws://kovo.space:4004/websocket",
  apiVersion: 1,
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ]
};
