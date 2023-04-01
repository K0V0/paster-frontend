import { JsonArray } from '@angular/compiler-cli/ngcc/src/utils';
import { Injectable } from '@angular/core';
import * as lang_en from 'src/assets/i18n/en.json';
import * as lang_sk from 'src/assets/i18n/sk.json';
import * as lang_ua from 'src/assets/i18n/ua.json';
import { LanguagesList } from './../../../_Base/config/languages.list';
import { LocalStorageService } from './../../../_CoreModule/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  private userSystemPrefferedLanguages: string[];
  private currentLang: string;
  private vocab: JsonArray;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    console.log("ideeeeeem");
    this.userSystemPrefferedLanguages = [];
    this.currentLang = LanguagesList.FALLBACK_LANG;
    this.vocab = [];
  }

  readVocabFiles() {
    //TODO hnus najvacsi, ale neviem ako zatial pristupovat ku konstantam podla nazvu ulozeneho v premennej
    let languageFile: any;
    switch(this.currentLang) {
      case 'sk': {
        languageFile = lang_sk;
        break;
      }
      case 'en': {
        languageFile = lang_en;
        break;
      }
      case 'ua': {
        languageFile = lang_ua;
        break;
      }
      default: {
        languageFile = lang_en;
        break;
      }
   }
   this.vocab.push(<JsonArray> languageFile[this.currentLang]);
  }

  findAndSetLang(): void {
    let storedLang = this.getStoredLang();
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

  getStoredLang(): string | null {
    return this.localStorageService.get("language");
  }

  getCurrentLang(): string {
    let storedLang = this.getStoredLang();
    if (storedLang !== null) {
      return storedLang;
    }
    return this.currentLang;
  }

  setLang(countryCode: string) {
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
