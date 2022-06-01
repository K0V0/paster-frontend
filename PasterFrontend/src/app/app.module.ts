import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from "./_CoreModule/core.module";
import { SharedModule } from "./_SharedModule/shared.module";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ]
})

export class AppModule { }
