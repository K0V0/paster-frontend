import { NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register.component";
import { RegisterService } from "./services/register.service";
import { SharedModule } from "../_SharedModule/shared.module";

@NgModule({
  imports: [
    SharedModule,
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
