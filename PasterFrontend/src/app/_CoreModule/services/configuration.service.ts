import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

declare global {
  interface Window {
    env?: {
      IS_PRODUCTION?: boolean;
      BACKEND_API?: string;
      BACKEND_WEBSOCKET?: string;
      API_VERSION?: string;
      API_KEY?: string;
      excludedJwtInterceptorEndpoints?: string[];
      DEVICE_TYPE?: string
    };
  }
}

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {

  public readonly production: boolean;
  public readonly apiUrl: string;
  public readonly apiKey: string;
  public readonly websocketUrl: string;
  public readonly apiVersion: string;
  public readonly excludedJwtInterceptorEndpoints: string[];
  public readonly deviceType: string

  constructor() {
    this.production = window?.env?.IS_PRODUCTION || environment.production;
    this.apiUrl = window?.env?.BACKEND_API || environment.apiUrl;
    this.apiKey = window?.env?.API_KEY || environment.apiKey;
    this.websocketUrl = window?.env?.BACKEND_WEBSOCKET || environment.websocketUrl;
    this.apiVersion = window?.env?.API_VERSION || environment.apiVersion;
    this.excludedJwtInterceptorEndpoints = window?.env?.excludedJwtInterceptorEndpoints || environment.excludedJwtInterceptorEndpoints;
    this.deviceType = window?.env?.DEVICE_TYPE || environment.deviceType;
  }

}
