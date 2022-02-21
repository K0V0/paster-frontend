import { LogregAnimations } from './logreg.animations';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Constants } from 'src/app/_Base/config/constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.scss'],
  animations: [ LogregAnimations.logregAnimation ]
})
export class LogregComponent implements OnInit {

  isOnLoginPage: boolean = false;
  isOnRegisterPage: boolean = false;

  constructor(
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkPage(this.location.path());
    this.trackNavigationEvent(this.router);
  }

  private trackNavigationEvent(router: Router): void {
    router.events.subscribe(events => {
      if (events instanceof NavigationStart) {
        this.checkPage(events.url);
      }
    });
  }

  private checkPage(url: string) {
    this.isOnRegisterPage = url == Constants.registerUrl;
    this.isOnLoginPage = url == Constants.loginUrl;
  }

}
