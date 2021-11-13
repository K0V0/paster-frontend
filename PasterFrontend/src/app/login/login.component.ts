import {Component, Input} from '@angular/core';
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
  serverFieldsErrorMessages: JsonObject;
  serverFormErrorMessage: string;
  serverFormBouncer: string;
  login: FormGroup;

  constructor(private loginService: LoginService) {
    this.login = new FormGroup({
      "user": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required),
    });
    this.serverFieldsErrorMessages = {};
    this.serverFormErrorMessage = "";
    this.serverFormBouncer = "";
  }

  doLogin() {
    //this.clearServerErrors();
    this.loginService
      .doLogin(this.login.value.user, this.login.value.pass)
      .subscribe(
        (data) => {
          console.log(<Login>data);
          // TODO ulozit jwt token ?
        },
        (error) => {
          let e;
          if ((e = error.error.message) != null) {
            if (e == this.serverFormErrorMessage) {
              this.serverFormBouncer = Math.random().toString(16);
            } else {
              this.serverFormErrorMessage = e;
            }
          }
          if ((e = error.error.messages) != null) { this.serverFieldsErrorMessages = e; }
        },
        () => {
          this.clearServerErrors();
        });
  }

  private clearServerErrors() {
    this.serverFieldsErrorMessages = {};
    this.serverFormErrorMessage = "";
  }

  //ngOnChanges() {
    ///**********THIS FUNCTION WILL TRIGGER WHEN PARENT COMPONENT UPDATES 'someInput'**************/
    //Write your code here
    //console.log("change");
  //}*/
}
