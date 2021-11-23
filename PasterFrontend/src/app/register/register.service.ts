import { Injectable } from '@angular/core';
import {RequestService} from "../_abstract/services/request.service";

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends RequestService {

  constructor() {
    super();
  }

  checkNameExist(): boolean {
    // TODO nutna funkncos na backende
    return false;
  }

  doRegister(user: string, pass: string, pass2: string, email: string) {
    return this.post(
      'api/v1/user/register',
      { name: user, pass: pass, pass2: pass2, email: email });
  }

}
