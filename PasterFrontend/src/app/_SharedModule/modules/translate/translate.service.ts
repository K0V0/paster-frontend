import { Injectable } from '@angular/core';
import { JsonArray } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  private availableLanguages: string[] = ['en', 'sk'];
  private currentLang: string;
  private readonly vocab: JsonArray;

  constructor() {
    this.currentLang = 'sk';
    this.vocab = [];
    this.readVocabFiles()
  }

  private readVocabFiles() {
    // TODO dalej zistovat ako dostat v angular zoznam suborov v nejakom assets subfoldri
    var request = new XMLHttpRequest();
    request.open(
      'GET',
      '/assets/i18n/' + this.currentLang + '.json',
      false);
    request.send(null);
    if (request.status === 200) {
      this.vocab.push(JSON.parse(request.responseText)[this.currentLang]);
    }
  }

  checkLang() {
    // TODO mechanizmus na dostanie locales z prehliadaca / vyber pouzivatela
    console.log("checkLang()");
    this.currentLang = 'sk';
  }

  setLang(countryCode: string) {
    if (this.availableLanguages.indexOf(countryCode) >= 0) {
      this.currentLang = countryCode;
    }
  }

  translate(path: string) {
    let parts: string[] = path.split('.');
    let tmp: any = this.vocab[0];
    parts.forEach(part => {
      if(Object.keys(tmp).indexOf(part) >= 0) {
        tmp = tmp[part];
      }
    });
    if (tmp.constructor.name !== "String") { return path; }
    return tmp;
  }

}
