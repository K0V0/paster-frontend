import { TranslateComponent } from './translate.component';
import { TranslationServerPipe } from './translate.server.pipe';
import { TranslationPipe } from './translate.pipe';
import { NgModule } from "@angular/core";
import { TranslateService } from "./translate.service";

@NgModule({
  imports: [

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
