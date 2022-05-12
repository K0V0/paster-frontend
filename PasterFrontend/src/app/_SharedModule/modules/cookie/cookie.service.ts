import { LocalStorageService } from './../../../_CoreModule/services/local-storage.service';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private localStorageService: LocalStorageService) {

  }

  cookiesAsked(): boolean {
    return this.localStorageService.get("cookiesSet") !== null;
  }

}
