import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from "./login/login.service";
import { TranslateModule } from "./_global/modules/translate/translate.module";
import { ValidationErrorsModule } from "./_global/modules/validation-errors/validationErrors.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavigationComponent } from "./_global/components/navigation/navigation.component";
import { HomeComponent } from "./home/home.component";
import { RegisterService } from "./register/register.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtService } from "./_global/services/jwt.service";
import { LocalStorageService } from "./_global/services/local-storage.service";
import { JwtInterceptor } from "./_global/interceptors/jwt-interceptor.service";
import { LoggerService } from "./_global/services/logger.service";
import { CommonModule } from "@angular/common";
import { BoardModule } from "./board/board.module";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ValidationErrorsModule,
    BoardModule,
    HttpClientModule
  ],
  providers: [
    LoggerService,
    LoginService,
    RegisterService,
    JwtService,
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class AppModule { }
