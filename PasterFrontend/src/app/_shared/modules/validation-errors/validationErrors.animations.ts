import {animate, style, transition, trigger} from "@angular/animations";

export const ValidationErrorsAnimations = {

  errorMessagesAnimation: trigger(
    'errorMessagesAnimation',
    [
      transition(':enter', [
        style({ opacity:0, height:0, maxHeight:0 }),
        animate('0.5s linear', style({ opacity:1, height:"auto", maxHeight:"3em" }))
      ]),
      transition(':leave', [
        animate('0.5s linear', style({ opacity:0, height:0, maxHeight:0 }))
      ])
    ]
  )

}
