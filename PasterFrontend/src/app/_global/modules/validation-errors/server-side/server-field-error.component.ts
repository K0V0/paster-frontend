import {
  Component,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";
import {JsonObject} from "@angular/compiler-cli/ngcc/src/packages/entry_point";

@Component({
  selector: 'app-server-error',
  templateUrl: './server-field-error.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class ServerFieldErrorComponent implements OnChanges {
  title = 'Error message(s) from server used for single field(s)';

  @Input() fieldName: string;
  @Input() errorsObject: JsonObject;
  @ViewChild('serverFieldErrorText') serverErrorSpanElem: any;
  errorMessage: string;

  constructor(private renderer: Renderer2) {
    this.fieldName = "";
    this.errorsObject = {};
    this.errorMessage = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    let e;
    if ((e = this.errorsObject[this.fieldName]?.toString()) != null) {
      if (this.errorMessage == e) {
        // bounce
        this.renderer.addClass(this.serverErrorSpanElem.nativeElement, 'blink');
        setTimeout(
          () => { this.renderer.removeClass(this.serverErrorSpanElem.nativeElement, 'blink'); },
          500);
      } else {
        // zobrazit
        this.errorMessage = e;
      }
    } else {
      // schovat error
      this.errorMessage = "";
    }
  }

}
