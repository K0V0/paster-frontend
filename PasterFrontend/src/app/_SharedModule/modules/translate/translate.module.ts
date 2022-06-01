import { FormsModule } from '@angular/forms';
import { TranslateComponent } from './translate.component';
import { TranslationServerPipe } from './translate.server.pipe';
import { TranslationPipe } from './translate.pipe';
import { NgModule } from "@angular/core";
import { TranslateService } from "./translate.service";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TranslationPipe,
    TranslationServerPipe,
    TranslateComponent
  ],
  exports: [
    TranslationPipe,
    TranslationServerPipe,
    TranslateComponent
  ],
  providers: [
    TranslateService
  ]
})

export class TranslateModule {}
