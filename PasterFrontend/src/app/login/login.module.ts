import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login.component";
import { LoginService } from "./services/login.service";
import { SharedModule } from "../_SharedModule/shared.module";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})

export class LoginModule {}
