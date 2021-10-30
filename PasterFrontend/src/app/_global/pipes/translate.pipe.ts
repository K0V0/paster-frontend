import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "../services/translate.service";

@Pipe({name: 't'})
export class TranslationPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(path: string): string {
    return this.translateService.translate(path)
  }
}
