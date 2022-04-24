import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from './../translate/translate.module';
import { NotificationComponent } from './notification.component';
import { NgModule } from "@angular/core";
import { NotificationService } from './notification.service';

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent
  ],
  providers: [
    NotificationService
  ]
})

export class NotificationModule {}
