import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor() { }

  checkNameExist(): boolean {
    // TODO nutna funkncos na backende
    return false;
  }

  doRegister(user: string, pass: string, pass2: string, email: string) {

  }

}
