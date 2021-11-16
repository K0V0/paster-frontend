import { NgModule } from "@angular/core";
import { TranslateModule } from "../../pipes/translate.module";
import { BrowserModule } from "@angular/platform-browser";
import { ServerFieldErrorComponent } from "./server-side/server-field-error.component";
import { LocalFieldErrorComponent } from "./frontend-side/local-field-error.component";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
  ],
  declarations: [
    ServerFieldErrorComponent,
    LocalFieldErrorComponent
  ],
  exports: [
    ServerFieldErrorComponent,
    LocalFieldErrorComponent
  ]
})

export class ValidationErrorsModule {}
