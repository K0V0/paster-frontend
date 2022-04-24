import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TranslateModule } from "../translate/translate.module";
import { AdsComponent } from "./ads.component";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule
  ],
  declarations: [
    AdsComponent
  ],
  exports: [
    AdsComponent
  ],
  providers: [
  ]
})

export class AdsModule {}
