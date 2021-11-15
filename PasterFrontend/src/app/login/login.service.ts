import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RequestService } from "../_abstract/services/request.service";
import {JwtService} from "../_global/services/jwt.service";
import {LocalStorageService} from "../_global/services/local-storage.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService extends RequestService {

  constructor(
    private jwtService: JwtService,
    private localStorageService: LocalStorageService
  ) {
    super();
  }

  checkLogin(): boolean {
    console.log("checkLogin()");
    if (this.jwtService.getUser() == null) {
      let jwtToken = this.localStorageService.get('jwtToken');
      if (jwtToken != null) {
        this.jwtService.setToken(jwtToken);
        return !this.jwtService.isTokenExpired();
      }
    } else {
      return !this.jwtService.isTokenExpired();
    }
    return false;
  }

  doLogin(user: string, pass: string): Observable<any> {
    return this.post(
      'api/v1/user/login',
      { name: user, pass: pass });
  }

  saveJwtToken(jwtToken: string): void {
    this.jwtService.setToken(jwtToken);
    this.localStorageService.set('jwtToken', jwtToken);
  }

}
