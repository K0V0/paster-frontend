import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from "rxjs";
import { LoginService } from "../../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("canActivate()");
    return this.loginService.checkLogin();
  }

}
