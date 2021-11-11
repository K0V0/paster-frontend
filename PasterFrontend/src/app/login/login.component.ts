import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { Login } from "../_abstract/interfaces/dtos.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'PasterLogin';
  serverFieldsErrors: JsonObject;
  serverError: string;
  login: FormGroup;

  constructor(private loginService: LoginService) {
    this.login = new FormGroup({
      "user": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required),
    });
    this.serverFieldsErrors = {};
    this.serverError = "";
  }

  doLogin() {
    this.loginService
    .doLogin(this.login.value.user, this.login.value.pass)
    .subscribe(
      (data) => {
        console.log(<Login>data);
        // TODO ulozit jwt token ?
      },
      (error) => {
        let e;
        if ((e = error.error.message) != null) { this.serverError = e; }
        if ((e = error.error.messages) != null) { this.serverFieldsErrors = e; }
      },
      () => { console.log('completed') });
  }
}
