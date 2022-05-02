import { Component, OnInit } from '@angular/core';
import { LoginService } from './_SharedModule/modules/login/services/login.service';
import { WidgetsService } from './_SharedModule/modules/navigation/widgets.service';
import { TranslateService } from "./_SharedModule/modules/translate/translate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PasterFrontend';
  pageFaded: boolean;

  constructor(
    private translateService: TranslateService,
    private loginService: LoginService,
    private widgetService: WidgetsService
  ) {
    this.pageFaded = false;
  }

  ngOnInit() {
    this.loginService.checkLogin();
    this.widgetService.getStateObservable().subscribe(fadeBackground => {
      this.pageFaded = fadeBackground;
    });
  }

}
