import { BannersComponent } from './components/banners/banners.component';
import { DownloadComponent } from './components/download/download.component';
import { NgModule } from "@angular/core";
import { SharedModule } from "../_SharedModule/shared.module";
import { HomeComponent } from "./components/home.component";
import { DownloadPlatformsService } from './components/download/download.platforms.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    DownloadComponent,
    BannersComponent
  ],
  exports: [
    HomeComponent,
    DownloadComponent,
    BannersComponent
  ],
  providers: [
  ]
})

export class HomeModule {}
