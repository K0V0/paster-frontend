import { JsonValue } from '@angular/compiler-cli/ngcc/src/utils';
import { Pipe, PipeTransform } from '@angular/core';
import {TranslateService} from "./translate.service";

@Pipe({name: 'ts'})
export class TranslationServerPipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(path: string, defaultVal: JsonValue | undefined = undefined): string {
    if (defaultVal === undefined) {
      return this.translateService.translateServer(path)
    }
    return this.translateService.translateServer(path, JSON.stringify(defaultVal))
  }
}
