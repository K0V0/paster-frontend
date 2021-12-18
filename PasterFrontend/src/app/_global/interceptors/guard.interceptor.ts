import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from "rxjs";
import { JwtService } from "../services/jwt.service";

@Injectable({
  providedIn: 'root',
})
export class GuardInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercept()");
    console.log(req.headers);
    // TODO checknut ci nema uz nejake headere a ci toto ich neprepise
    return next.handle(req.clone({
      setHeaders: { "Authorization": this.jwtService.getTokenWithPrefix() }
    }));
  }

}
