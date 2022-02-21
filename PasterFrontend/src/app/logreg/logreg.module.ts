import { NgModule } from "@angular/core";
import { SharedModule } from "../_SharedModule/shared.module";
import { LogregComponent } from "./components/logreg.component";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LogregComponent
  ],
  exports: [
    LogregComponent
  ],
  providers: [
  ]
})

export class LogregModule {}
