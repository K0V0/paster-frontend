import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { LoginService } from "./services/login.service";
import { SharedModule } from "../_SharedModule/shared.module";
import { LogoutComponent } from "./components/logout/logout.component";

@NgModule({
  imports: [
    SharedModule
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
