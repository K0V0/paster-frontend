import { NgModule } from "@angular/core";
import { TranslateModule } from "../translate/translate.module";
import { ServerFieldErrorComponent } from "./server-side/server-field-error.component";
import { LocalFieldErrorComponent } from "./frontend-side/local-field-error.component";
import { LocalFormErrorComponent } from "./frontend-side/local-form-error.component";
import { CustomValidators } from "./validators/custom.validator";
import { ServerFormErrorComponent } from "./server-side/server-form-error.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule
  ],
  declarations: [
    ServerFieldErrorComponent,
    ServerFormErrorComponent,
    LocalFieldErrorComponent,
    LocalFormErrorComponent
  ],
  exports: [
    ServerFieldErrorComponent,
    ServerFormErrorComponent,
    LocalFieldErrorComponent,
    LocalFormErrorComponent,
  ],
  providers: [
    CustomValidators
  ]
})

export class ValidationErrorsModule {}
