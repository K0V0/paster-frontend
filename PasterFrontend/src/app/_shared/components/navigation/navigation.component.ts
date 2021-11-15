import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoginService} from "../../../login/login.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  title = 'Main navigation';
  loggedIn: boolean;

  constructor(private loginService: LoginService) {
    this.loggedIn = this.loginService.checkLogin();
  }


  //TODO zobrazovat ponuky podla toho ci je user logged alebo nie

}
