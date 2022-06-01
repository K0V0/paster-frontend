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
  selector: 'app-server-form-error',
  templateUrl: './server-form-error.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class ServerFormErrorComponent implements OnChanges {
  title = 'Error message(s) from server used for single field(s)';

  @Input() errorsObject: any;
  @ViewChild('serverFormErrorText') serverErrorSpanElem: any;
  errorMessage: string;

  constructor(private renderer: Renderer2) {
    this.errorMessage = "";
  }

  ngOnChanges(changes: SimpleChanges) {
    let e;
    if ((e = this.errorsObject['form']) != null) {
      console.log(e);
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
