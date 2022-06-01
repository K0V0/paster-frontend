import { animate, style, transition, trigger } from "@angular/animations";

export const NavigationAnimations = {

  loginRegisterWidgetAnimation: trigger(
    'loginRegisterWidgetAnimation',
    [
      transition(':enter', [
        style({ opacity:0 }),
        animate('0.25s linear', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity:1 }),
        animate('0.25s linear', style({ opacity:0 })),
      ])
    ]
  )

}
