import {Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import { ValidationErrorsAnimations } from "../validationErrors.animations";

@Component({
  selector: 'app-server-multiple-error',
  templateUrl: './server-multiple.component.html',
  styleUrls: ['../validationErrors.component.scss'],
  animations: [ ValidationErrorsAnimations.errorMessagesAnimation ]
})
export class ServerMultipleErrorComponent implements OnChanges {
  title = 'Error message from server used for whole form/multiple fields';

  @ViewChild('serverFormErrorText') serverFormErrorText: any;

  @Input()
  errorMessage: string = "";

  @Input()
  bouncer: string = "";

  ngOnChanges(changes: SimpleChanges) {
    console.log('changed error');
    console.log(this.serverFormErrorText);
    // changes.prop contains the old and the new value...
  }

  // TODO spravit nejaky feedback pre uzivatela ak znava spravi tu istu chybu aby vedel ze
  //  aplikacia "zije" len zase spravil tu istu kokotinu
}
