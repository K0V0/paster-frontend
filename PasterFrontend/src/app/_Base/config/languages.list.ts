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

  public static getLangNameByCode(langCode: string): string {
    let result: string | undefined = LanguagesList.languagesList.get(langCode);
    if (result !== undefined) {
      return result;
    }
    for (let lang of LanguagesList.compatibleLanguagesMappings) {
      console.log("set lang from preferences");
          console.log(lang[1]);
          console.log(lang[1].indexOf(langCode) > -1);
      if (lang[1].indexOf(langCode) > -1) { return lang[0]; }
    }
    //TODO ked bude logging dat ako warning
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
