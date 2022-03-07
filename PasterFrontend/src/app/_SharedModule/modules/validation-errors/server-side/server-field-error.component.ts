import { JsonObject } from '@angular/compiler-cli/ngcc/src/packages/entry_point';
import {
  Component,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { IHash } from 'src/app/_Base/interfaces/base.dto.interface';
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
  errorMessage: JsonObject;

  constructor(private renderer: Renderer2) {
    this.fieldRef = "";
    this.errorMessage = {};
  }

  // TODO preco tu proste nejde vlozit parent kontext a sledovat changes na nom pomocou
  //  subscribe
  ngOnChanges(changes: SimpleChanges) {
    // TODO zbavit sa neurcitych typov ak to je mozne
    let e: any;
    if ((e = this.errorsObject[this.fieldRef]) != null) {
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
      this.errorMessage = {};
    }
  }

}