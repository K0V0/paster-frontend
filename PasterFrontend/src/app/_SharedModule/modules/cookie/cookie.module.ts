import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '../translate/translate.module';
import { NgModule } from "@angular/core";
import { CookieComponent } from './cookie.component';
import { CookieService } from './cookie.service';

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    CookieComponent
  ],
  exports: [
    CookieComponent
  ],
  providers: [
    CookieService
  ]
})

export class CookieModule {}
