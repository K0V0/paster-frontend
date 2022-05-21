import { SitemapModule } from './modules/sitemap/sitemap.module';
import { CookieModule } from './modules/cookie/cookie.module';
import { AdsModule } from './modules/ads/ads.module';
// moje moduly
import { ValidationErrorsModule } from "./modules/validation-errors/validationErrors.module";
import { LoginModule } from './modules/login/login.module';
import { TranslateModule } from "./modules/translate/translate.module";
import { NavigationModule } from "./modules/navigation/navigation.module";
import { RegisterModule } from './modules/register/register.module';
import { PipesModule } from './pipes/pipes.module';

// angular stuff
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClipboardModule } from "ngx-clipboard";
import { NotificationModule } from "./modules/notification/notification.module";
import { GdprModule } from './modules/gdpr/gdpr.module';
import { DevelopersModule } from './modules/developers/developers.module';
import { ChangesModule } from './modules/changes/changes.module';

@NgModule({
  exports: [
    // moje moduly
    TranslateModule,
    NavigationModule,
    ValidationErrorsModule,
    LoginModule,
    RegisterModule,
    PipesModule,
    NotificationModule,
    AdsModule,
    CookieModule,
    GdprModule,
    SitemapModule,
    DevelopersModule,
    ChangesModule,
    // angular stuff
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule
  ]
})

export class SharedModule {

}
