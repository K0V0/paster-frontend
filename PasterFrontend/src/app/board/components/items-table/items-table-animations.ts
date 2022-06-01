import { animate, stagger, style, transition, trigger } from "@angular/animations";

export const TableItemsAnimations = {

  tableItemAppendAnimation: trigger(
    'tableItemAppendAnimation',
    [
      transition(':enter', [
        // opacity:0 - platne pred dokoncenim naberania vysky, element sa objavi az po vytvoreni si miesta
        style({ opacity:0, maxHeight:0 }),
        animate('0.5s linear', style({ height:"auto", maxHeight:"10em", opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.25s linear', style({ opacity:0 })),
        animate('0.25s linear', style({ height:0, maxHeight:0 }))
      ])
    ]
  ),

  hideFullTextButtonAppendAnimation: trigger(
    'hideFullTextButtonAppendAnimation',
    [
      transition(':enter', [
        style({ opacity:0 }),
        animate('0.25s linear', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.25s linear', style({ opacity:0 }))
      ])
    ]
  ),

  /*copyToClipboardAnimation: trigger(
    'hideFullTextButtonAppendAnimation',
    [
      transition(':enter', [
        //style({ opacity:0 }),
        animate('0.25s linear', style({ scale: 1.05 }))
      ]),
      transition(':leave', [
        animate('0.25s linear', style({ scale: 1 }))
      ])
    ]*/

}
