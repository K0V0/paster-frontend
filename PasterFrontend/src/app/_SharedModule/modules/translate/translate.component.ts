import { Component } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/_Base/components/base.component';
import { LanguagesList } from './../../../_Base/config/languages.list';
import { TranslateService } from './translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent extends BaseComponent {
  availLanguages: Array<any>;
  langCode: FormControl;
  language: FormGroup;

  constructor(
    private translateService: TranslateService,
    protected router: Router
  ) {
    super(router);
    this.availLanguages = Array.from(LanguagesList.getLanguageList());
    this.langCode = new FormControl(this.translateService.getCurrentLang());
    this.language = new FormGroup({ langCode: this.langCode });
  }

  changeLanguage(): void {
    this.translateService.setLang(this.langCode.value);
    super.redirectWithRefresh();
  }

}
