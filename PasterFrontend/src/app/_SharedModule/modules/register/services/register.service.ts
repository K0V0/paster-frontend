import { Injectable } from '@angular/core';
import {RequestService} from "../../../../_CoreModule/services/request.service";
import {RegisterDTO} from "../dtos/register.dto.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(private requestService: RequestService) {}

  checkNameExist(): boolean {
    // TODO nutna funkncost na backende
    return false;
  }

  // TODO na backend pridat suhlas s gdpr
  doRegister(user: string, pass: string, pass2: string, email: string, gdpr: boolean): Observable<RegisterDTO> {
    return this.requestService.post<RegisterDTO>(
      'api/v1/user/register',
      { name: user, pass: pass, pass2: pass2, email: email, gdpr });
  }

}
