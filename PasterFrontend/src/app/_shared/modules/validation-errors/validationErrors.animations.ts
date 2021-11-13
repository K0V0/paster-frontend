import {animate, style, transition, trigger} from "@angular/animations";

export const ValidationErrorsAnimations = {

  errorMessagesAnimation: trigger(
    'errorMessagesAnimation',
    [
      transition(':enter', [
        // opacity:0 - platne pred dokoncenim naberania vysky, element sa objavi az po vytvoreni si miesta
        style({ opacity:0, height:0, maxHeight:0 }),
        animate('0.5s linear', style({ height:"auto", maxHeight:"2em" }))
      ]),
      transition(':leave', [
        animate('0.5s linear', style({ opacity:0, height:0, maxHeight:0 }))
      ])
    ]
  )

}
