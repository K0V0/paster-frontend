import {NgModule} from "@angular/core";
import {RequiredErrorComponent} from "./required.component";
import {TranslateModule} from "../../../_global/pipes/translate.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
  ],
  declarations: [
    RequiredErrorComponent
  ],
  exports: [
    RequiredErrorComponent
  ]
})

export class ValidationErrorsModule {}
