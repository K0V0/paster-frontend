import { animate, style, transition, trigger } from "@angular/animations";

export const NotificationAnimations = {

  showAnimation: trigger(
    'showAnimation',
    [
      transition(':enter', [
        // opacity:0 - platne pred dokoncenim naberania vysky, element sa objavi az po vytvoreni si miesta
        style({ opacity:0 }),
        animate('0.5s linear', style({ height:"auto", opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.25s linear', style({ opacity:0 })),
        animate('0.25s linear', style({ height:0 }))
      ])
    ]
  )

}
