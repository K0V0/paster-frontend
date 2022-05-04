import { LocalStorageService } from './../../../_CoreModule/services/local-storage.service';
import { LanguagesList } from './../../../_Base/config/languages.list';
import { Injectable } from '@angular/core';
import { JsonArray } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  private userSystemPrefferedLanguages: string[];
  private currentLang: string;
  private readonly vocab: JsonArray;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.userSystemPrefferedLanguages = [];
    this.currentLang = LanguagesList.FALLBACK_LANG;
    this.vocab = [];
    this.findAndSetLang();
    this.readVocabFiles();
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

  private findAndSetLang(): void {
    let storedLang = this.localStorageService.get("language");
    // return stored (set) language
    if (storedLang != null) {
      this.currentLang = storedLang;
      return;
    }
    // try to match lang from browser supported languages list
    if (navigator.languages !== undefined) {
      this.userSystemPrefferedLanguages = navigator.languages
        .map(lang => lang.trim().split(/-|_/)[0]);
      for (let lang of this.userSystemPrefferedLanguages) {
          // if something better than default language is found in supported list returned by browser
          if (lang !== LanguagesList.FALLBACK_LANG) {
            this.localStorageService.set("language", LanguagesList.getBestSuitedLang(lang));
            this.currentLang = lang;
            break;
          }
      }
    }
  }

  getCurrentLang(): string {
    let storedLang = this.localStorageService.get("language");
    if (storedLang !== null) {
      return storedLang;
    }
    return this.currentLang;
  }

  setLang(countryCode: string) {
    console.log("setLang()");
    if (LanguagesList.containsLanguage(countryCode)) {
      this.localStorageService.set("language", countryCode);
      this.currentLang = countryCode;
    }
  }

  translate(path: string, defaultTranslation: string | undefined = undefined) {
    if (defaultTranslation === null) {
      defaultTranslation = undefined;
    }
    let parts: string[] = path.split('.');
    let tmp: any = this.vocab[0];
    if (tmp != undefined) {
      parts.forEach(part => {
        if(Object.keys(tmp).indexOf(part) >= 0) {
          tmp = tmp[part];
        }
      });
    }
    if (tmp === undefined || tmp.constructor.name !== "String" && defaultTranslation === undefined) {
       return path;
    }
    if (tmp.constructor.name !== "String" && defaultTranslation !== undefined && defaultTranslation.length > 0) {
      return defaultTranslation;
    }
    return tmp;
  }

  translateServer(path: string, defaultTranslation: string | undefined = undefined) {
      path = "server." + path;
      return this.translate(path, defaultTranslation);
  }

}
