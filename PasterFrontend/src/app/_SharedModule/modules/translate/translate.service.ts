import { JsonArray } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LanguagesList } from './../../../_Base/config/languages.list';
import { LocalStorageService } from './../../../_CoreModule/services/local-storage.service';
import * as lang_sk from 'src/assets/i18n/sk.json';
import * as lang_en from 'src/assets/i18n/en.json';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {

  //private translation_sk = [];
  private userSystemPrefferedLanguages: string[];
  private currentLang: string;
  private vocab: JsonArray;
  private vocab2: any;
  //private languageChanged: Subject<boolean>;
  private stringsLoaded: Subject<boolean>;

  constructor(
    private localStorageService: LocalStorageService,
    //private http: HttpClient
  ) {
    this.userSystemPrefferedLanguages = [];
    this.currentLang = LanguagesList.FALLBACK_LANG;
    this.vocab = [];
    this.vocab2 = {};
    //this.languageChanged = new Subject();
    this.stringsLoaded = new Subject();
    this.findAndSetLang();
    this.readVocabFiles();
  }

  private readVocabFiles() {

    let lang: any = lang_sk;
    this.vocab.push(lang['sk']);


    //this.vocab2['sk'] = (lang_sk)['sk'];
    //console.log(this.vocab2);
    //console.log(JSON.parse(lang['sk']));
    //this.vocab.push(lang['sk']);
    //this.stringsLoaded.next(true);
    //this.vocab.push(JSON.parse(lang_en));
    /*var request = new XMLHttpRequest();
    request.open(
      'GET',
      '/assets/i18n/' + this.currentLang + '.json',
      false);
    request.send(null);
    if (request.status === 200) {
      console.log(JSON.parse(request.responseText)[this.currentLang]);
      this.vocab.push(JSON.parse(request.responseText)[this.currentLang]);
    }*/

    /*this.http.get<string>('/assets/i18n/' + this.currentLang + '.json')
      .subscribe((data) => {
        console.log(data);
        this.vocab = JSON.parse(data)[this.currentLang];
        this.stringsLoaded.next(true);
      });*/
  }

  private findAndSetLang(): void {
    console.log(this.vocab);
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

  getLoadingDoneObservable(): Subject<boolean> {
    return this.stringsLoaded;
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
    console.log("translate()");
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
