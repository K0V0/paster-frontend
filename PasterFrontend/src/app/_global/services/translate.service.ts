import { Injectable } from '@angular/core';
import {JsonArray, JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import {JSONFile} from "@angular/cli/utilities/json-file";

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  private availableLanguages: string[] = ['en', 'sk'];
  private currentLang: string;
  private vocab: JsonArray;

  constructor() {
    this.currentLang = 'sk';
    this.vocab = [];
    this.readVocabFiles()
  }

  private readVocabFiles() {
    // TODO dalej zistovat ako dostat v angular zoznam suborov v nejakom assets subfoldri
    //this.availableLanguages.forEach((language: string) => {
      fetch('/assets/i18n/' + this.currentLang + '.json')
      .then(response => response.json())
      .then(data => {
        //console.log(Object.keys(data));
        this.vocab.push(data);
      });
    //});
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

  translate(path: string) {
    // TODO prvykrat spustene pred tym nez su natiahnute data zo suborov
    let parts: string[] = path.split('.');
    let tmp: any = this.vocab[0];
    if (Object.keys(tmp).indexOf(this.currentLang) >= 0) {
      console.log("lang found");
    }
    //tmp = (this.vocab[0]);
    parts.forEach(part => {
      console.log(part);
      console.log(tmp);
      //if(Object.keys(tmp).indexOf(part: string) >= 0) {
        //tmp = tmp[part];
      //}
      //tmp = tmp[part];
    });
    return "";
  }

}

export function t(path: string){
  console.log(path);
}
