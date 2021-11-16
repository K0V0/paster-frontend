import {Component, Input, OnInit} from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";

@Component({
  selector: 'app-required-error',
  templateUrl: './required.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class RequiredErrorComponent {
  title = 'Required field error message';

  @Input()
  obj: any;

  @Input()
  errorMessageI18n: string = "";
}
