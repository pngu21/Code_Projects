// src/app/animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0 }))
  ])
]);
//Use these animations in component templates