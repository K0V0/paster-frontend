import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from "@angular/router";
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent  implements OnInit {

  logout: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.logout = new FormGroup({});
  }

  ngOnInit() {}

  doLogout(): void {
    this.loginService.doLogout().subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
