import { TranslationPipe } from './translate.pipe';
import { NgModule } from "@angular/core";
import { TranslateService } from "./translate.service";

@NgModule({
  imports: [

  ],
  declarations: [
    TranslationPipe
  ],
  exports: [
    TranslationPipe
  ],
  providers: [
    TranslateService
  ]
})

export class TranslateModule {}
