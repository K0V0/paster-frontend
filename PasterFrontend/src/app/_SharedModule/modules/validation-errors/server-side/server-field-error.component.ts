import { JsonObject } from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {
  Component,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";

@Component({
  selector: 'app-server-field-error',
  templateUrl: './server-field-error.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class ServerFieldErrorComponent implements OnChanges {
  title = 'Error message(s) from server used for single field(s)';

  @Input() fieldRef: string;
  @Input() errorsObject: any;
  @ViewChild('serverFieldErrorText') serverErrorSpanElem: any;
  errorCode: string;
  errorMessage: string;

  constructor(private renderer: Renderer2) {
    this.fieldRef = "";
    this.errorCode = "";
    this.errorMessage = "";
  }

  // TODO preco tu proste nejde vlozit parent kontext a sledovat changes na nom pomocou
  //  subscribe
  ngOnChanges(changes: SimpleChanges) {
    // TODO zbavit sa neurcitych typov ak to je mozne
    let fieldErrorsObject: any = this.errorsObject[this.fieldRef];
    if (fieldErrorsObject !== null && fieldErrorsObject !== undefined) {
      // TODO skaredy hack, ale zatial z backendu viac ako jedna chyba na jedno policko naraz nepride
      let e: any = fieldErrorsObject[0];
      if (this.errorCode == e['code']) {
        // bounce
        this.renderer.addClass(this.serverErrorSpanElem.nativeElement, 'blink');
        setTimeout(
          () => { this.renderer.removeClass(this.serverErrorSpanElem.nativeElement, 'blink'); },
          500);
      } else {
        // zobrazit
        console.log(e['code']);
        this.errorCode = e['code'];
        this.errorMessage = e['message'];
      }
    } else {
      // schovat error
      this.errorCode = "";
    }
  }

}
