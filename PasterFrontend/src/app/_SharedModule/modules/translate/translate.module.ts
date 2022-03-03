import { TranslationServerPipe } from './translate.server.pipe';
import { TranslationPipe } from './translate.pipe';
import { NgModule } from "@angular/core";
import { TranslateService } from "./translate.service";

@NgModule({
  imports: [

  ],
  declarations: [
    TranslationPipe,
    TranslationServerPipe
  ],
  exports: [
    TranslationPipe,
    TranslationServerPipe
  ],
  providers: [
    TranslateService
  ]
})

export class TranslateModule {}
