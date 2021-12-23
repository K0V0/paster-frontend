import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { RequestService } from "../../_CoreModule/services/request.service";
import { JwtService } from "../../_CoreModule/services/jwt.service";
import { LocalStorageService } from "../../_CoreModule/services/local-storage.service";
import {LoginResponseDTO} from "../dtos/login.dto.interface";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: boolean;

  constructor(
    private jwtService: JwtService,
    private localStorageService: LocalStorageService,
    private requestService: RequestService
  ) {
    this.loggedIn = false;
  }

  checkLogin(): boolean {
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

  doLogin(user: string, pass: string): Observable<LoginResponseDTO> {
    return this.requestService.post<LoginResponseDTO>(
      'api/v1/user/login',
      { name: user, pass: pass });
  }

  doLogout(): void {
    //TODO spravit logout
    this.jwtService.removeToken();
    this.localStorageService.remove('jwtToken');
  }

  saveJwtToken(jwtToken: string): void {
    this.jwtService.setToken(jwtToken);
    this.localStorageService.set('jwtToken', jwtToken);
  }

}
