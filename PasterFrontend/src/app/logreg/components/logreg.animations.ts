import { animate, style, transition, trigger } from "@angular/animations";

export const LogregAnimations = {

  logregAnimation: trigger(
    'logregAnimation',
    [
      transition(':enter', [
        style({ opacity:0 }),
        animate('0.5s linear', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity:1 }),
        animate('0.25s linear', style({ opacity:0 })),
      ])
    ]
  )

}
