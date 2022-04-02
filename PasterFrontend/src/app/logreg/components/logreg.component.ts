import { WidgetsService } from './../../_SharedModule/modules/navigation/widgets.service';
import { LogregAnimations } from './logreg.animations';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logreg',
  templateUrl: './logreg.component.html',
  styleUrls: ['./logreg.component.scss'],
  animations: [ LogregAnimations.logregAnimation ]
})
export class LogregComponent implements OnInit {

  // TODO zrefaktorovat tento shit
  isOnLoginPage: boolean = false;
  isOnRegisterPage: boolean = false;

  constructor(
    private location: Location,
    private widgetService: WidgetsService,
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
    // TODO zrefaktorovat tento shit
    console.log(url);
    this.isOnRegisterPage = this.widgetService.isWidgetUrl(url);
    this.isOnLoginPage = this.widgetService.isWidgetUrl(url);
  }

}
