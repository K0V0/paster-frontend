import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RequestService } from "../_abstract/services/request.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService extends RequestService {

  constructor() { super(); }

  checkLogin() {
    console.log("checkLogin()");
    // TODO check if jwt token saved and valid, try to login using it if avail
  }

  doLogin(user: string, pass: string): Observable<any> {
    return this.post(
      'api/v1/user/login',
      { name: user, pass: pass });
  }

}
