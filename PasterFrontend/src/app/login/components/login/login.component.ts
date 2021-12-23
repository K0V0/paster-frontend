import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "../../../_Base/components/base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  title = 'PasterLogin';
  user: FormControl;
  pass: FormControl;
  login: FormGroup;

  constructor(
    private loginService: LoginService,
  ) {
    super();
    this.user = new FormControl("", Validators.required);
    this.pass = new FormControl("", Validators.required);
    this.login = new FormGroup({
      "user": this.user,
      "pass": this.pass
    });
  }

  ngOnInit() {
    this.login.valueChanges.subscribe(() => {
      this.clearAllServerErrors();
    })
  }

  // TODO nejak vymysliet ak user po obdrzani chybovej hlasky zo servera nic nezmenil
  //  nerobit znova request
  // TODO skusit spravit nejaku abstrakciu aj pre observable
  //  co by obsahovala handlovanie server errorov uz v sebe
  doLogin() {
    this.loginService
      .doLogin(this.login.value.user, this.login.value.pass)
      .subscribe(
        (data) => {
          this.loginService.saveJwtToken(data.jwtToken);
          // TODO skryt login popup / nejaka akcia na UI po prihlaseni
        },
        (error) => {
          this.setAllServerErrors(error);
        },
        () => {
          this.clearAllServerErrors();
        });
  }

}
