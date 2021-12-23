import { NgModule } from "@angular/core";

// moje moduly
import { ValidationErrorsModule } from "./modules/validation-errors/validationErrors.module";

// angular stuff
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {TranslateModule} from "./modules/translate/translate.module";
import {NavigationModule} from "./modules/navigation/navigation.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  exports: [
    // moje moduly
    TranslateModule,
    NavigationModule,
    ValidationErrorsModule,
    // angular stuff
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})

export class SharedModule {

}
