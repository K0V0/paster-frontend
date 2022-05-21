import { TranslateModule } from './../translate/translate.module';
import { GdprComponent } from './gdpr.component';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    TranslateModule
  ],
  declarations: [
    GdprComponent
  ],
  exports: [
    GdprComponent
  ],
  providers: [
  ]
})

export class GdprModule {

}
