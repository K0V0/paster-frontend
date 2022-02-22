import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './_SharedModule/modules/login/services/login.service';
import { TranslateService } from "./_SharedModule/modules/translate/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'PasterFrontend';

  constructor(
    private translateService: TranslateService,
    private loginService: LoginService
  ) {}

  // TODO is equivalent of jquery document.ready ?
  ngOnInit() {
    this.translateService.checkLang();
    this.loginService.checkLogin();
  }

  ngOnDestroy(): void {
  }

}
