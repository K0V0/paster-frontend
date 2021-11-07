import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor() { }

  checkLogin() {
    console.log("checkLogin()");
    // TODO check if jwt token saved and valid, try to login using it if avail
  }

  doRegister(user: string, pass: string, pass2: string, email: string) {

  }

}
