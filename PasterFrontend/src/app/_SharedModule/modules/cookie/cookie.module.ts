import { TranslateModule } from '../translate/translate.module';
import { NgModule } from "@angular/core";
import { CookieComponent } from './cookie.component';
import { CookieService } from './cookie.service';

@NgModule({
  imports: [
    TranslateModule
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
