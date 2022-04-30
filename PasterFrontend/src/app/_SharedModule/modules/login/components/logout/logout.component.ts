import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { BaseComponent } from 'src/app/_Base/components/base.component';
import { isJSDocThisTag } from 'typescript';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent extends BaseComponent implements OnInit {

  logout: FormGroup;

  constructor(
    private loginService: LoginService,
    protected router: Router
  ) {
    super(router);
    this.logout = new FormGroup({});
  }

  ngOnInit(): void {
    // temporal fix for not refreshing page after logout
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  doLogout(): void {
    this.loginService.doLogout().subscribe(data => {
      this.router.navigate(['/']);
    });
  }

}
