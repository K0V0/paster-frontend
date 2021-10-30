import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  private availableLanguages: string[] = ['en', 'sk'];
  private currentLang: string;

  constructor() {
    this.currentLang = 'sk';
  }

  private readVocabFile() {

  }

  checkLang() {
    // TODO mechanizmus na dostanie locales z prehliadaca / vyber pouzivatela
    this.currentLang = 'sk';
  }

  setLang(countryCode: string) {
    if (this.availableLanguages.indexOf(countryCode) >= 0) {
      // TODO vyber jazyk
    }
  }

  //const swaggerDoc = require('../swagger.json')

  translate(path: string) {

    return "";
  }

}

export function t(path: string){
  console.log(path);
}
