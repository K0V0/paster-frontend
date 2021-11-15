import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from './login/login.service';
import { TranslateService } from "./_global/services/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'PasterFrontend';

  constructor(
    private loginService: LoginService,
    private translateService: TranslateService
  ) {}

  // TODO is equivalent of jquery document.ready ?
  ngOnInit() {
    this.translateService.checkLang();
    this.loginService.checkLogin();
  }

  ngOnDestroy(): void {
  }

}
