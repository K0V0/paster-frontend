import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoginService } from "../login/services/login.service";
import { NavigationAnimations } from './navigation.animations';
import { WidgetsService } from './widgets.service';

/**
logika tohoto componentu je nezobrazovat login/register dropdown widget
ak pouzivatel prisiel na login/registraciu pomocou adresy aby mu bol
zobrazeny full page formular.
V opacnom pripade, ked sa nachadza na domovskej stranke a chce sa prihlasit,
ponuknut mu widget.
*/

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [ NavigationAnimations.loginRegisterWidgetAnimation ]
})
export class NavigationComponent implements OnInit {
  title = 'Main navigation';
  loggedIn: boolean;
  widgetStates: Map<string, boolean>;

  constructor(
    private loginService: LoginService,
    private widgetService: WidgetsService,
    private router: Router
  ) {
    this.loggedIn = false;
    this.widgetStates = new Map;
  }

  @HostListener('document:click', ['$event.target'])
  clickOutside(element: any) {
    let elements: any = document.getElementsByClassName("logregFormWidget");
    if (elements.length > 0) {
      if (!elements[0].contains(element)) {
        this.widgetService.clearAll();
      }
    }
  }

  ngOnInit(): void {
    this.trackNavigationEvent(this.router);
  }

  toggleWidget(url: string, event: Event): void {
    if (!this.widgetService.isBlocked()) {
      event.preventDefault();
      event.stopPropagation();
      this.widgetService.toggleState(url);
    }
  }

  private trackNavigationEvent(router: Router): void {
    router.events.subscribe(events => {
      if (events instanceof NavigationStart) {
        // je spustene aj pri prvom spusteni appky
        this.widgetService.setBlocked(this.widgetService.isWidgetUrl(events.url));
        this.loggedIn = this.loginService.checkLogin();
        this.widgetStates = this.widgetService.getStates();
      }
    });
  }

}
