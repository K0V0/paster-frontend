import { Component } from '@angular/core';
import { LoginService } from '../_shared/services/login.service';
//import { LoginModel } from './login.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { t } from "../_global/services/translate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'PasterLogin';
  login: FormGroup;

  constructor(private loginService: LoginService) {
    this.login = new FormGroup({
      "user": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required),
    });
  }

  doLogin() {
    //console.log(this.login);
    //console.log(this.title);
    this.loginService.doLogin(this.login.value.user, this.login.value.pass);
  }

  get user() {
    return this.login.controls.user;
  }

  get pass() {
    return this.login.controls.pass;
  }
}
