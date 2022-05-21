import { TranslateComponent } from './../translate/translate.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from '@angular/router';
import { LogregComponent } from 'src/app/logreg/components/logreg.component';
import { BoardComponent } from "../../../board/components/board.component";
import { HomeComponent } from "../../../home/components/home.component";
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { TranslateModule } from "../translate/translate.module";
import { Guard } from "./guard.service";
import { NavigationComponent } from "./navigation.component";
import { CookieModule } from '../cookie/cookie.module';
import { GdprComponent } from '../gdpr/gdpr.component';
import { DevelopersComponent } from '../developers/developers.component';
import { SitemapComponent } from '../sitemap/sitemap.component';
import { ChangesComponent } from '../changes/changes.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LogregComponent
  },
  {
    path: "register",
    component: LogregComponent
  },
  {
    path: "board",
    component: BoardComponent,
    canActivate: [Guard]
  },
  {
    path: "logout",
    component: LogregComponent
  },
  {
    path: "language",
    component: TranslateComponent
  },
  {
    path: "cookies",
    component: LogregComponent
  },
  {
    path: "gdpr",
    component: GdprComponent
  },
  {
    path: "developers",
    component: DevelopersComponent
  },
  {
    path: "sitemap",
    component: SitemapComponent
  },
  {
    path: "changelog",
    component: ChangesComponent
  }
];

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    LoginModule,
    RegisterModule,
    TranslateModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    CookieModule
  ],
  exports: [
    RouterModule,
    NavigationComponent
  ]
})

export class NavigationModule { }
