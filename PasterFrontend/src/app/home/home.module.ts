import { NgModule } from "@angular/core";
import { SharedModule } from "../_SharedModule/shared.module";
import { BannersComponent } from './components/banners/banners.component';
import { DownloadComponent } from './components/download/download.component';
import { FootComponent } from './components/foot/foot.component';
import { HomeComponent } from "./components/home.component";

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    DownloadComponent,
    BannersComponent,
    FootComponent
  ],
  exports: [
    HomeComponent,
    DownloadComponent,
    BannersComponent,
    FootComponent
  ],
  providers: [
  ]
})

export class HomeModule {}
