import { Input } from '@angular/core';
export class LanguagesList {

  languagesList: Map<string, string> = new Map([
    ["sk", "Slovenský"],
    ["en", "English"]
  ]);

  constructor() {}

  public getAvailableLanguages(): string[] {
    return Array.from(this.languagesList.keys());
  }

  public getLanguageList(): Map<string, string> {
    return this.languagesList;
  }

  public getLangNameByCode(langCode: string): string {
    let result: string | undefined = this.languagesList.get(langCode);
    if (result !== undefined) {
      return result;
    }
    return "";
  }
}
