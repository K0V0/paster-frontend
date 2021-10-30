import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  private availableLanguages: string[] = ['en', 'sk'];

  constructor() {
    // TODO mechanizmus na dostanie locales z prehliadaca / vyber pouzivatela
  }

  checkLang() {

  }

  setLang(countryCode: string) {

  }

  translate(path: string) {
    return "";
  }

}

export function t(path: string){
  console.log(path);
}
