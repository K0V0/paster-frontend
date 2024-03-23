import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";

declare global {
  interface Window {
    env?: {
      production?: boolean;
      apiUrl?: string;
      websocketUrl?: string;
      apiVersion?: string;
      apiKey?: string;
      excludedJwtInterceptorEndpoints?: string[];
      deviceType?: string
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
    this.production = window?.env?.production || environment.production;
    this.apiUrl = window?.env?.apiUrl || environment.apiUrl;
    this.apiKey = window?.env?.apiKey || environment.apiKey;
    this.websocketUrl = window?.env?.websocketUrl || environment.websocketUrl;
    this.apiVersion = window?.env?.apiVersion || environment.apiVersion;
    this.excludedJwtInterceptorEndpoints = window?.env?.excludedJwtInterceptorEndpoints || environment.excludedJwtInterceptorEndpoints;
    this.deviceType = window?.env?.deviceType || environment.deviceType;
  }

}
