import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  title = 'PasterRegister';
  register: FormGroup;

  // TODO servica ktora by pri dopisani mena spravila request na backend pre zistenie
  //  ci nie je uz obsadene

  constructor() {
    this.register = new FormGroup({
      "user": new FormControl("", Validators.required),
      "pass": new FormControl("", Validators.required),
      "pass2": new FormControl("", Validators.required),
      "email": new FormControl("", Validators.required),
    });
  }

  doRegistration() {

  }

}
