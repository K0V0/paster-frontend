import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "../../../login/components/login/login.component";
import { RegisterComponent } from "../../../register/components/register.component";
import { HomeComponent } from "../../../home/components/home.component";
import { Guard } from "./guard.service";
import { BoardComponent } from "../../../board/components/board.component";
import { NavigationComponent } from "./navigation.component";
import { TranslateModule } from "../translate/translate.module";
import {BrowserModule} from "@angular/platform-browser";
import {LogoutComponent} from "../../../login/components/logout/logout.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "board",
    component: BoardComponent,
    canActivate: [Guard]
  },
  {
    path: "logout",
    component: LogoutComponent
  }
];

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    TranslateModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    NavigationComponent
  ]
})

export class NavigationModule { }
