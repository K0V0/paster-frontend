import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { LoginResponseDTO } from "../dtos/login.dto.interface";
import { JwtService } from "../../../../_CoreModule/services/jwt.service";
import { LocalStorageService } from "../../../../_CoreModule/services/local-storage.service";
import { RequestService } from "../../../../_CoreModule/services/request.service";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedIn: boolean = false;

  constructor(
    private jwtService: JwtService,
    private localStorageService: LocalStorageService,
    private requestService: RequestService
  ) {}

  checkLogin(): boolean {
    if (this.loggedIn) {
      return true;
    } else {
      this.loggedIn = this.jwtService.isValid();
      if (!this.loggedIn) {
        let jwtToken = this.localStorageService.get('jwtToken');
        if (jwtToken != null) {
          this.jwtService.setToken(jwtToken);
          this.loggedIn = this.jwtService.isValid();
        }
      }
      return this.loggedIn;
    }
  }

  // todo oddelit kontrolu nad session pouzivatela of component
  doLogin(user: string, pass: string): Observable<LoginResponseDTO> {
    return this.requestService.post<LoginResponseDTO>(
      'api/v1/user/login',
      { name: user, pass: pass });
  }

  doLogout(): Observable<boolean> {
    this.loggedIn = false;
    this.jwtService.removeToken();
    this.localStorageService.remove('jwtToken');
    let logoutObservable: Observable<boolean> = of(true);
    return logoutObservable;
  }

  saveJwtToken(jwtToken: string): void {
    this.localStorageService.set("jwtToken", jwtToken);
    this.jwtService.setToken(jwtToken);
  }

}
