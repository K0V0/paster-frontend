import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from "./login/login.service";
import { TranslateModule } from "./_global/pipes/translate.module";
import { ValidationErrorsModule } from "./_shared/modules/validation-errors/validationErrors.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./_shared/components/navigation/navigation.component";
import { HomeComponent } from "./home/home.component";
import { RegisterService } from "./register/register.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ValidationErrorsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
