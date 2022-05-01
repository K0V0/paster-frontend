import { WidgetsService } from './_SharedModule/modules/navigation/widgets.service';
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
  pageFaded = false;

  constructor(
    private translateService: TranslateService,
    private loginService: LoginService,
    private widgetService: WidgetsService
  ) {

  }

  ngOnInit() {
    this.loginService.checkLogin();
    this.widgetService.getStateObservable().subscribe(fadeBackground => {
      this.pageFaded = fadeBackground;
    });
  }

  ngOnDestroy(): void {
  }

}
