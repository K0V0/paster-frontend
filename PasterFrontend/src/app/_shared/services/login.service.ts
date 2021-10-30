import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor() { }

  checkLogin() {
    console.log("checkLogin()");
    // TODO check if jwt token saved and valid, try to login using it if avail
  }

  doLogin(user: string, pass: string) {
    console.log("doLogin(username: " + user + ", password:" + pass +")");
  }

}
