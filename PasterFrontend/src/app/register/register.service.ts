import { Injectable } from '@angular/core';
import {RequestService} from "../_global/services/request.service";
import {RegisterDTO} from "./register.interface";
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

  doRegister(user: string, pass: string, pass2: string, email: string): Observable<RegisterDTO> {
    return this.requestService.post<RegisterDTO>(
      'api/v1/user/register',
      { name: user, pass: pass, pass2: pass2, email: email });
  }

}
