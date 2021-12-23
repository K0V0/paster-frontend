import { NgModule } from "@angular/core";
import { SharedModule } from "../_SharedModule/shared.module";
import { HomeComponent } from "./components/home.component";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
  ]
})

export class HomeModule {}
