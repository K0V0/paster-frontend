import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class GuardInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted");
    return next.handle(req);
  }

}
