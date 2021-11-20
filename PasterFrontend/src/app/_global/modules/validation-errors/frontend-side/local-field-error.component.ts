import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";
import { FormControl } from "@angular/forms";
import { TranslateService } from "../../../services/translate.service";

@Component({
  selector: 'app-local-field-error',
  templateUrl: './local-field-error.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class LocalFieldErrorComponent implements OnInit {
  title = 'Field error message handled by frontend';

  @Input() parentComponentContext: any;
  @Input() fieldRef: String;
  @Input() formGroupRef: String;
  field: FormControl | undefined ;
  messages: string[];

  constructor(private translateService: TranslateService) {
    this.fieldRef = "";
    this.formGroupRef = "";
    this.messages = [];
  }

  ngOnInit(): void {
    this.field = <FormControl>this.parentComponentContext['' + this.fieldRef];
    this.getActiveErrorsKeys();
    this.field?.valueChanges.subscribe((val: string) => {
      this.getActiveErrorsKeys();
    })
  }

  private getActiveErrorsKeys(): void {
    let errors = this.field?.errors;
    let keys = errors ? Object.keys(errors) : null;
    this.messages = [];
    keys?.forEach((key: string) => {
      let translationPath: string = this.formGroupRef + '.validationErrors.' +  this.fieldRef + '.' + key;
      this.messages.push(this.translateService.translate(translationPath));
    });
  }

}
