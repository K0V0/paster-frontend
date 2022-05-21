import { NgModule } from "@angular/core";
import { TranslateModule } from "../translate/translate.module";
import { ChangesComponent } from "./changes.component";

@NgModule({
  imports: [
    TranslateModule
  ],
  declarations: [
    ChangesComponent
  ],
  exports: [
    ChangesComponent
  ],
  providers: [
  ]
})

export class ChangesModule {

}
