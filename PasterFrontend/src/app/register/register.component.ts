import {Component, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "./register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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

  constructor(private registerService: RegisterService) {
    this.user = new FormControl("", Validators.required);
    this.pass = new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.pass2 = new FormControl("", [
      Validators.required
    ]);
    this.email = new FormControl("", Validators.required);
    this.register = new FormGroup({
      'user': this.user,
      'pass': this.pass,
      'pass2': this.pass2,
      'email': this.email
    });
  }

  doRegistration() {

  }

  checkName(name: string) {

  }

}
