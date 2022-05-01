import { LanguagesList } from './../../../_Base/config/languages.list';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TranslateService } from './translate.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  availLanguages: LanguagesList;
  currentLanguage: string;
  langCode: FormControl;
  language: FormGroup;

  constructor(private translateService: TranslateService) {
    this.availLanguages = new LanguagesList();
    this.currentLanguage = translateService.getCurrentLang();
    this.langCode = new FormControl(this.currentLanguage);
    this.language = new FormGroup({ langCode: this.langCode });
  }

  ngOnInit(): void {
    console.log(this.currentLanguage);

  }

  changeLanguage(event: Event): void {
    console.log("changed");
    console.log(this.langCode.value);
  }

}
