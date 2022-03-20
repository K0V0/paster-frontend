// moje moduly
import { ValidationErrorsModule } from "./modules/validation-errors/validationErrors.module";
import { LoginModule } from './modules/login/login.module';
import { TranslateModule } from "./modules/translate/translate.module";
import { NavigationModule } from "./modules/navigation/navigation.module";
import { RegisterModule } from './modules/register/register.module';

// angular stuff
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClipboardModule } from "ngx-clipboard";

@NgModule({
  exports: [
    // moje moduly
    TranslateModule,
    NavigationModule,
    ValidationErrorsModule,
    LoginModule,
    RegisterModule,
    // angular stuff
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClipboardModule
  ]
})

export class SharedModule {

}
