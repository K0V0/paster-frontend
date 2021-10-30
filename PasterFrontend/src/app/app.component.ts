import { Component } from '@angular/core';
import { LoginService } from './_shared/services/login.service';
import { TranslateService } from "./_global/services/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PasterFrontend';

  // dependency injection
  constructor(
    private loginService: LoginService,
    private translateService: TranslateService
  ) {}

  // equivalent of jquery document.ready ?
  ngOnInit() {
    this.translateService.checkLang();
    this.loginService.checkLogin();
  }

}
