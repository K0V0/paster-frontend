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
    this.checkLang();
    this.checkLogin();
    this.backgroundFadingEventListener();
  }

  private checkLang(): void {
    let storedLang: string | null = this.translateService.getStoredLang();
    this.translateService.findAndSetLang();
    this.translateService.readVocabFiles();
    // ugly hack for behaviour seen on chrome on Windows computer
    if (storedLang === null) {
      window.location.reload();
    }
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
