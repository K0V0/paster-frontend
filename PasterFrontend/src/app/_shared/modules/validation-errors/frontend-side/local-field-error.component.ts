import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'app-local-error',
  templateUrl: './local-field-error.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class LocalFieldErrorComponent implements OnInit {
  title = 'Field error message handled by frontend';

  @Input()
  obj: AbstractControl;

  keys: string[] | null;

  constructor() {
    this.obj = new FormControl();
    this.keys = null;
  }

  ngOnInit(): void {
    this.getActiveErrorsKeys();
    this.obj.valueChanges.subscribe((val: string) => {
      this.getActiveErrorsKeys();
    })
  }

  private getActiveErrorsKeys(): void {
    let errors = this.obj.errors;
    this.keys = errors ? Object.keys(errors) : null;
  }

}
