import {NgModule} from "@angular/core";
import {RequiredErrorComponent} from "./frontend-side/required.component";
import {TranslateModule} from "../../../_global/pipes/translate.module";
import {BrowserModule} from "@angular/platform-browser";
import {ServerMultipleErrorComponent} from "./server-side/server-multiple.component";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
  ],
  declarations: [
    RequiredErrorComponent,
    ServerMultipleErrorComponent
  ],
  exports: [
    RequiredErrorComponent,
    ServerMultipleErrorComponent
  ]
})

export class ValidationErrorsModule {}
