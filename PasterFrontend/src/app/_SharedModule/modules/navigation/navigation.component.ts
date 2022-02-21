import { NavigationAnimations } from './navigation.animations';
import { Constants } from './../../../_Base/config/constants';
import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LoginService } from "../login/services/login.service";

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
  loggedIn: boolean = false;
  isOnRegistrationPage: boolean = false;
  isOnLoginPage: boolean = false;
  showRegistrationWidget: boolean = false;
  showLoginWidget: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  /*@HostListener('click')
  clickInside(event: any) {
    console.log("event")
    console.log(event);
  }*/

  @HostListener('document:click', ['$event.target'])
  clickOutside(element: any) {
    // todo prerobit bezpecnejsie, moze byt viac komponent rovnakeho typu
    // pada, prerobit
    if (!document.getElementsByTagName("app-login")[0].contains(element)
        || !document.getElementsByTagName("app-register")[0].contains(element)) {
      this.showLoginWidget = this.showRegistrationWidget = false;
    }
  }

  ngOnInit(): void {
    this.checkUserLogged();
    this.trackNavigationEvent(this.router);
  }

  toggleRegisterWidget(event: Event): void {
    this.stopEvent(event);
    this.showRegistrationWidget = !this.showRegistrationWidget;
    this.showLoginWidget = false;
  }

  toggleLoginWidget(event: Event): void {
    this.stopEvent(event);
    this.showLoginWidget = !this.showLoginWidget;
    this.showRegistrationWidget = false;
  }

  private trackNavigationEvent(router: Router): void {
    router.events.subscribe(events => {
      if (events instanceof NavigationStart) {
        this.checkUserLogged();
        if (!this.loggedIn) {
          this.checkRegistration(events);
          this.checkLogin(events);
        }
      }
    });
  }

  private checkUserLogged(): void {
    this.loggedIn = this.loginService.checkLogin();
  }

  private checkRegistration(events: NavigationStart): void {
    this.isOnRegistrationPage = events.url == Constants.registerUrl;
  }

  private checkLogin(events: NavigationStart): void {
    this.isOnLoginPage = events.url == Constants.loginUrl;
  }

  private stopEvent(event: Event) {
    if (!this.isOnLoginPage && !this.isOnRegistrationPage) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  // TODO implementovac close na click mimo

  //TODO zobrazovat ponuky podla toho ci je user logged alebo nie - refresh



}
