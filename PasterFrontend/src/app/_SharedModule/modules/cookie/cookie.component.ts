import { CookieCrate } from './cookie.crate';
import { NotificationService } from './../notification/notification.service';
import { WidgetsService } from './../navigation/widgets.service';
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from './cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent implements OnInit {
  askedForCookies: boolean;
  marketing: FormControl;
  cookies: FormGroup;

  constructor(
    private cookiesService: CookieService,
    private widgetsService: WidgetsService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.askedForCookies = false;
    this.marketing = new FormControl();
    this.cookies = new FormGroup({
      "marketing": this.marketing
    });
  }

  ngOnInit(): void {
    let cookiesCrate: CookieCrate = this.cookiesService.getConsent();
    this.marketing.setValue(cookiesCrate.marketing);
  }

  acceptCookies(): void {
    let cookiesCrate: CookieCrate = new CookieCrate();
    cookiesCrate.marketing = this.marketing.value;
    this.cookiesService.setConsent(cookiesCrate);
    this.widgetsService.clearAll();
    // runs as standalone (user initiated change)
    if (this.router.url == '/cookies') {
      this.notificationService.notifyTranslated("cookies.saved");
      const { redirect } = window.history.state;
      this.router.navigateByUrl(redirect || '/');
    }
  }

}
