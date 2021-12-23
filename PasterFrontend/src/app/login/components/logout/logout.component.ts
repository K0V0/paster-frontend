import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from "@angular/router";

// TODO komponent ktory bude hlaskou oznamujucov odhlasenie na domovskej stranke alebo
//  redirect po jeho potvrdeni

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.doLogout();
    this.router.navigate(["/"]);
  }

  doLogout(): void {
    this.loginService.doLogout();
  }

}
