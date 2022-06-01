import { CookieCrate } from './cookie.crate';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  private static readonly BASE_COOKIES_CONSENT_IDENTIFICATOR: string = "consentBaseCookies";
  private static readonly MARKETING_COOKIES_CONSENT_IDENTIFICATOR: string = "consentMarketingCookies";
  private static readonly VALID_DAYS: number = 365;
  private static readonly TRUE_REPRESENTATION: string = "true";
  private static readonly FALSE_REPRESENTATION: string = "false";

  constructor() {}

  // todo nazvoslovie fx vracajucej boolean
  public cookiesAsked(): boolean {
    return this.getCookie(CookieService.BASE_COOKIES_CONSENT_IDENTIFICATOR) !== ''
      && this.getCookie(CookieService.MARKETING_COOKIES_CONSENT_IDENTIFICATOR) !== ''
  }

  public setConsent(consentCookies: CookieCrate): void {
    this.setCookie(CookieService.BASE_COOKIES_CONSENT_IDENTIFICATOR, CookieService.TRUE_REPRESENTATION, CookieService.VALID_DAYS);
    this.setCookie(CookieService.MARKETING_COOKIES_CONSENT_IDENTIFICATOR, this.boolToString(consentCookies.marketing), CookieService.VALID_DAYS);
  }

  public getConsent(): CookieCrate {
    let cookieCrate: CookieCrate = new CookieCrate();
    cookieCrate.marketing = this.stringToBool(this.getCookie(CookieService.MARKETING_COOKIES_CONSENT_IDENTIFICATOR));
    return cookieCrate;
  }

  public getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  public deleteCookie(name: string) {
    this.setCookie(name, "", -1);
  }

  public setCookie(name: string, value: string, expireDays: number, path: string = "") {
    let d: Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires: string = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + (path.length > 0 ? "; path=" + path : "");
  }

  private boolToString(bool: boolean): string {
    return bool ? CookieService.TRUE_REPRESENTATION : CookieService.FALSE_REPRESENTATION;
  }

  private stringToBool(str: string): boolean {
    if (str.toUpperCase() === "TRUE") {
      return true;
    }
    return false;
  }

}
