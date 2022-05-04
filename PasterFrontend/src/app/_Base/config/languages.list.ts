import { Language } from "../interfaces/base.dto.interface";

export class LanguagesList {

  public static readonly FALLBACK_LANG = 'en';

  private static readonly languagesList: Map<string, string> = new Map([
    ["sk", "Slovenský"],
    ["en", "English"]
  ]);

  private static readonly compatibleLanguagesMappings: Map<string, string[]> = new Map([
    ["sk", ["cz", "cs"]],
    ["en", ["us"]]
  ]);

  public static getAvailableLanguages(): string[] {
    return Array.from(LanguagesList.languagesList.keys());
  }

  public static getLanguageList(): Map<string, string> {
    return this.languagesList;
  }

  public static containsLanguage(langCode: string): boolean {
    return LanguagesList.languagesList.get(langCode) !== undefined;
  }

  public static getBestSuitedLang(langCode: string): string {
    // return original language if found
    if (LanguagesList.languagesList.has(langCode)) {
      return langCode;
    }
    // return language if requested language is compatible
    for (let lang of LanguagesList.compatibleLanguagesMappings) {
      if (lang[1].indexOf(langCode) > -1) { return lang[0]; }
    }
    //TODO ked bude logging dat ako warning
    // return default language if all methods before failed
    return LanguagesList.FALLBACK_LANG;
  }

  public static getUnderstanableLanguages(lang: string): string[] {
    let result: string[] | undefined = LanguagesList.compatibleLanguagesMappings.get(lang);
    if (result !== undefined) {
      return result;
    }
    return [];
  }
}
