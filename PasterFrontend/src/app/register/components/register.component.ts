import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "../services/register.service";
import { CustomValidators } from "../../_SharedModule/modules/validation-errors/validators/custom.validator";
import { UserRegistrationValidators } from "../utils/register.validator";
import { BaseComponent } from "../../_Base/components/base.component";
import { LoginService } from "../../login/services/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {
  title = 'Register new user';
  user: FormControl;
  pass: FormControl;
  pass2: FormControl;
  email: FormControl;
  register: FormGroup;

  // TODO servica ktora by pri dopisani mena spravila request na backend pre zistenie
  //  ci nie je uz obsadene

  // TODO custom input validations podla backendu na backend chcem posielat len overovanie
  //  ci uzivatel uz existuje a podobne

  constructor(
    private registerService: RegisterService,
    private loginService: LoginService
  ) {
    super();
    this.user = new FormControl("", [
      Validators.required,
      CustomValidators.forbiddenCharacters
    ]);
    this.pass = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      CustomValidators.forbiddenCharacters
    ]);
    this.pass2 = new FormControl("", [
      Validators.required
    ]);
    this.email = new FormControl("", [
      Validators.required,
      Validators.email
    ]);
    this.register = new FormGroup({
      'user': this.user,
      'pass': this.pass,
      'pass2': this.pass2,
      'email': this.email
    }, {
      validators: [
        UserRegistrationValidators.passwordMatch
      ]
    });
  }

  ngOnInit() {
    this.register.valueChanges.subscribe(() => {
      this.clearAllServerErrors();
    })
  }

  doRegistration() {
    this.registerService.doRegister(
      this.user.value, this.pass.value, this.pass2.value, this.email.value)
    .subscribe((data) => {
      this.loginService.saveJwtToken(data.jwtToken);
    },
    (error) => {
      this.setAllServerErrors(error);
    },
    () => {
      this.clearAllServerErrors();
    });
  }

  checkName(name: string) {

  }

}
