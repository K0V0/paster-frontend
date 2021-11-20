import { NgModule } from "@angular/core";
import { TranslateModule } from "../../pipes/translate.module";
import { BrowserModule } from "@angular/platform-browser";
import { ServerFieldErrorComponent } from "./server-side/server-field-error.component";
import { LocalFieldErrorComponent } from "./frontend-side/local-field-error.component";
import { LocalFormErrorComponent } from "./frontend-side/local-form-error.component";
import { CustomValidators } from "./validators/_shared/custom.validator";
import { UserRegistrationValidators } from "./validators/user-registration/user-registration.validator";
import {ServerFormErrorComponent} from "./server-side/server-form-error.component";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
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
    LocalFormErrorComponent
  ],
  providers: [
    CustomValidators,
    UserRegistrationValidators
  ]
})

export class ValidationErrorsModule {}
