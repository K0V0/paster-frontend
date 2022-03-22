export const environment = {
  production: true,
  backendUrl: "http://kovo.space:4004",
  apiVersion: 1,
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ]
};
