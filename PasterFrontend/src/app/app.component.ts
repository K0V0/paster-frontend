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
    private translateService: TranslateService, //called to initiate language guessing
    private loginService: LoginService,
    private widgetService: WidgetsService
  ) {
    this.pageFaded = false;
  }

  ngOnInit() {
    this.checkLang();
    this.checkLogin();
    this.backgroundFadingEventListener();
  }

  private checkLang(): void {
    /*let lastUsedLang: string = this.translateService.getCurrentLang();
    this.translateService.findAndSetLang();
    let currentLang: string = this.translateService.getCurrentLang();
    this.translateService.readVocabFiles();
    console.log(lastUsedLang);
    console.log(currentLang);*/
    //if (currentLang !== lastUsedLang) { window.location.reload(); }
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
