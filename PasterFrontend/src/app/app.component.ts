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
  stringsLoaded: boolean;

  constructor(
    private translateService: TranslateService, //called to initiate language guessing
    private loginService: LoginService,
    private widgetService: WidgetsService
  ) {
    this.pageFaded = false;
    this.stringsLoaded = false;
  }

  ngOnInit() {
    this.checkLogin();
    this.backgroundFadingEventListener();
  }

  private checkLogin(): void {
    this.loginService.checkLogin();
  }

  private backgroundFadingEventListener(): void {
    this.widgetService.getStateObservable().subscribe(fadeBackground => {
      this.pageFaded = fadeBackground;
    });
  }

}
