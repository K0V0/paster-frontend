import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'PasterLogin';
  login: FormGroup;

  constructor(private loginService: LoginService) {
    this. login = new FormGroup({
      "user": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required),
    });
  }

  doLogin() {
    this.loginService.doLogin(this.login.value.user, this.login.value.pass)
    .subscribe((response) => console.log(response));
  }
}
