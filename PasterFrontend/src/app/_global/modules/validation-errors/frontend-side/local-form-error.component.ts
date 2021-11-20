import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";
import {FormControl, FormGroup} from "@angular/forms";
import { TranslateService } from "../../../services/translate.service";

@Component({
  selector: 'app-local-form-error',
  templateUrl: './local-form-error.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class LocalFormErrorComponent implements OnInit {
  title = 'Form error message handled by frontend';

  @Input() parentComponentContext: any;
  @Input() formGroupRef: string;
  formGroup: FormGroup | undefined ;
  messages: string[];

  constructor(private translateService: TranslateService) {
    this.formGroupRef = "";
    this.messages = [];
  }

  ngOnInit(): void {
    this.formGroup = <FormGroup>this.parentComponentContext[this.formGroupRef];
    this.getActiveErrorsKeys();
    this.formGroup?.valueChanges.subscribe(() => {
      this.getActiveErrorsKeys();
    })
  }

  private getActiveErrorsKeys(): void {
    let errors = this.formGroup?.errors;
    let keys = errors ? Object.keys(errors) : null;
    this.messages = [];
    keys?.forEach((key: string) => {
      let translationPath: string = this.formGroupRef + '.validationErrors.' + key;
      this.messages.push(this.translateService.translate(translationPath));
    });
  }

}
