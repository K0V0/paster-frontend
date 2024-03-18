(function(window) {
  window.env = window.env || {};

  // Environment variables
  window["env"]["apiUrl"] = "${BACKEND_API}";
  window["env"]["websocketUrl"] = "${BACKEND_WEBSOCKET}";
  window["env"]["apiVersion"] = "${API_VERSION}";
  window["env"]["apiKey"] = "${API_KEY}";

})(this);
