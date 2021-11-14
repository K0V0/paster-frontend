import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { Login } from "../_abstract/interfaces/dtos.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // TODO extrahovat spolocnu logiku pre vsetky formulare hlavne server error handling
  //  do abstraktnej triedy
  title = 'PasterLogin';
  user: FormControl;
  pass: FormControl;
  serverFieldsErrorMessages: JsonObject;
  serverFormErrorMessage: JsonObject;
  login: FormGroup;

  constructor(private loginService: LoginService) {
    this.user = new FormControl("", Validators.required);
    this.pass = new FormControl("", Validators.required);
    this.login = new FormGroup({
      "user": this.user,
      "pass": this.pass
    });
    this.serverFieldsErrorMessages = {};
    this.serverFormErrorMessage = {};
  }

  ngOnInit() {
    this.login.valueChanges.subscribe(() => {
      this.clearServerErrors();
    })
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
          if ((e = error.error.message) != null) {
              // treba zabalit do objektu lebo primitivny typ nespusti ngOnChange() akciu ak sa
              // jeho obsah nezmeni, co kvoli logike aplikacie tuna chcem
              this.serverFormErrorMessage = { form: e };
          }
          if ((e = error.error.messages) != null) {
              this.serverFieldsErrorMessages = e;
          }
        },
        () => {
          this.clearServerErrors();
        });
  }

  private clearServerErrors() {
    this.serverFieldsErrorMessages = {};
    this.serverFormErrorMessage = {};
  }

}
