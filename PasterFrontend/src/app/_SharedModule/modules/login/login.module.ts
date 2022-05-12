import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsModule } from "../validation-errors/validationErrors.module";
import { TranslateModule } from './../translate/translate.module';
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { LoginService } from "./services/login.service";

@NgModule({
  imports: [
    ReactiveFormsModule,
    ValidationErrorsModule,
    TranslateModule,
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
