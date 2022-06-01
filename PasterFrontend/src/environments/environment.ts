// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //backendUrl: "https://0.0.0.0:4004",
  //websocketUrl: "wss://0.0.0.0:4004/websocket",
  backendUrl: "https://api.paster.cloud",
  websocketUrl: "wss://api.paster.cloud/websocket",
  apiVersion: 1,
  apiKey: "hDXb3efYoLpXGDhXfKGuv2t9qT0eArr0",
  excludedJwtInterceptorEndpoints: [
    "/user/login",
    "/user/register",
    "/user/logout"
  ],
  deviceType: "webapp"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
