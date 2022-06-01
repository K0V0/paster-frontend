import { NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register.component";
import { RegisterService } from "./services/register.service";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "../translate/translate.module";
import { ValidationErrorsModule } from "../validation-errors/validationErrors.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    ValidationErrorsModule,
    TranslateModule
  ],
  declarations: [
    RegisterComponent
  ],
  exports: [
    RegisterComponent
  ],
  providers: [
    RegisterService
  ]
})

export class RegisterModule {}
