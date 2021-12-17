import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RequestService } from "../_abstract/services/request.service";
import { JwtService } from "../_global/services/jwt.service";
import { LocalStorageService } from "../_global/services/local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService extends RequestService {
  loggedIn: boolean;

  constructor(
    private jwtService: JwtService,
    private localStorageService: LocalStorageService
  ) {
    super();
    this.loggedIn = false;
  }

  checkLogin(): boolean {
    //console.log("checkLogin()");
    if (this.loggedIn) {
      console.log("checkLogin() user already logged");
      return true;
    } else {
      console.log("checkLogin() jwt sequence started");
      this.loggedIn = this.jwtService.isValid();
      if (!this.loggedIn) {
        console.log("checkLogin() user not logged yet");
        let jwtToken = this.localStorageService.get('jwtToken');
        if (jwtToken != null) {
          console.log("checkLogin() token obtained from local storage");
          this.jwtService.setToken(jwtToken);
          this.loggedIn = this.jwtService.isValid();
          console.log("checkLogin() token from storage is: " + this.loggedIn);
        }
      }
      return this.loggedIn;
    }
  }

  doLogin(user: string, pass: string): Observable<any> {
    return this.post(
      'api/v1/user/login',
      { name: user, pass: pass });
  }

  doLogout(): void {
    //TODO spravit logout
  }

  saveJwtToken(jwtToken: string): void {
    this.jwtService.setToken(jwtToken);
    this.localStorageService.set('jwtToken', jwtToken);
  }

}
