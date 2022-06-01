import { TranslateModule } from './../translate/translate.module';
import { NgModule } from "@angular/core";
import { DevelopersComponent } from "./developers.component";

@NgModule({
  imports: [
    TranslateModule
  ],
  declarations: [
    DevelopersComponent
  ],
  exports: [
    DevelopersComponent
  ],
  providers: [
  ]
})

export class DevelopersModule {

}
