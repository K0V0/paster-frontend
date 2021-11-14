import {NgModule} from "@angular/core";
import {RequiredErrorComponent} from "./frontend-side/required.component";
import {TranslateModule} from "../../../_global/pipes/translate.module";
import {BrowserModule} from "@angular/platform-browser";
import { ServerFieldErrorComponent } from "./server-side/server-error.component";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
  ],
  declarations: [
    RequiredErrorComponent,
    ServerFieldErrorComponent
  ],
  exports: [
    RequiredErrorComponent,
    ServerFieldErrorComponent
  ]
})

export class ValidationErrorsModule {}
