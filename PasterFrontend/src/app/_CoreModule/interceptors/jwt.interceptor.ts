import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from "rxjs";
import { JwtService } from "../services/jwt.service";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercept()");
    if (this.applyFilter(req.url)) {
      return next.handle(req.clone({
        setHeaders: { "Authorization": this.jwtService.getTokenWithPrefix() }
      }));
    } else {
      return next.handle(req);
    }
  }

  private applyFilter(requestUrl: string): boolean {
    // TODO zamenit obycajne replace za regex zo stringu ktory bude zamienat
    //  iba ak cast ktoru treba zamenit (odmazat) sa nachadza vylucne na zaciatku retazca
    let endpointToFilter: string = requestUrl.replace(
      environment.backendUrl + "/api/v" + environment.apiVersion, "");
    let isNotFiltered: boolean = false;
    // is on the list of NOT filtered endpoints
    environment.excludedJwtInterceptorEndpoints.forEach(endpoint => {
      if (endpoint.indexOf(endpointToFilter) == 0) {
        isNotFiltered = true;
      }
    })
    return !isNotFiltered;
  }

}
