import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from './../translate/translate.module';
import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./services/login.service";
import { LogoutComponent } from "./components/logout/logout.component";
import { ValidationErrorsModule } from "../validation-errors/validationErrors.module";

@NgModule({
  imports: [
    ReactiveFormsModule,
    ValidationErrorsModule,
    TranslateModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  exports: [
    LoginComponent,
    LogoutComponent
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule {}
