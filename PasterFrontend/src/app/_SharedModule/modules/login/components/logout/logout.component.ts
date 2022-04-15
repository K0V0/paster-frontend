import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from '../../services/login.service';

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

  ngOnInit(): void {
  }

  doLogout(): void {
    this.loginService.doLogout().subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
