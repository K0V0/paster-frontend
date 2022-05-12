import { LocalStorageService } from './../../../_CoreModule/services/local-storage.service';
import { Component } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent {
  askedForCookies: boolean;
  marketing: FormControl;
  cookies: FormGroup;


  constructor(private localStorageService: LocalStorageService) {
    this.askedForCookies = false;
    this.marketing = new FormControl();
    this.cookies = new FormGroup({
      "marketing": this.marketing
    });
  }

  ngOnInit() {
    this.marketing.valueChanges.subscribe(() => {
      console.log("valueChanged");
    })
  }

  cookiesWidget(): void {
    if (this.localStorageService.get("cookiesAcceptBase") === null) {

    }
  }

  acceptCookies(): void {
    console.log("-------------------")
    console.log(this.marketing);
  }

}
