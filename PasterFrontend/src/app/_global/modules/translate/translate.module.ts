import { TranslationPipe } from './translate.pipe';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [
    TranslationPipe
  ],
  exports: [
    TranslationPipe
  ]
})

export class TranslateModule {}
