import { animate, style, transition, trigger } from "@angular/animations";

export const NotificationAnimations = {

  showAnimation: trigger(
    'showAnimation',
    [
      transition(':enter', [
        style({ opacity:0 }),
        animate('0.125s linear', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.25s linear', style({ opacity:0 })),
      ])
    ]
  )

}
