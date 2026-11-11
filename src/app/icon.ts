import { Component, input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'plus'
  | 'menu'
  | 'x'
  | 'check'
  | 'x-circle'
  | 'map-pin'
  | 'flame'
  | 'dumbbell'
  | 'activity'
  | 'message'
  | 'clipboard'
  | 'users'
  | 'trending-up'
  | 'smartphone'
  | 'calendar'
  | 'eye'
  | 'target'
  | 'award'
  | 'quote';

/** Ícones em traço (estilo Lucide), herdam a cor do texto via currentColor. */
@Component({
  selector: 'app-icon',
  host: { class: 'inline-block shrink-0', 'aria-hidden': 'true' },
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="stroke()"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="block h-full w-full"
    >
      @switch (name()) {
        @case ('arrow-right') {
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        }
        @case ('arrow-left') {
          <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
        }
        @case ('plus') {
          <path d="M12 5v14" /><path d="M5 12h14" />
        }
        @case ('menu') {
          <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
        }
        @case ('x') {
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        }
        @case ('check') {
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        }
        @case ('x-circle') {
          <circle cx="12" cy="12" r="9" /><path d="m15 9-6 6" /><path d="m9 9 6 6" />
        }
        @case ('map-pin') {
          <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />
        }
        @case ('flame') {
          <path
            d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
          />
        }
        @case ('dumbbell') {
          <path d="M6.5 6.5v11" /><path d="M17.5 6.5v11" /><path d="M3.5 9v6" /><path d="M20.5 9v6" />
          <path d="M6.5 12h11" />
        }
        @case ('activity') {
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        }
        @case ('message') {
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        }
        @case ('clipboard') {
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
        }
        @case ('users') {
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        }
        @case ('trending-up') {
          <path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" />
        }
        @case ('smartphone') {
          <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
        }
        @case ('calendar') {
          <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" />
          <path d="M3 10h18" />
        }
        @case ('eye') {
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" />
        }
        @case ('target') {
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" />
        }
        @case ('award') {
          <circle cx="12" cy="8" r="6" /><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" />
        }
        @case ('quote') {
          <path
            d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2.02-2-2H4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .01-1 1.03V20c0 1 0 1 1 1Z"
          />
          <path
            d="M15 21c3 0 7-1 7-8V5c0-1.25-.76-2.02-2-2h-4c-1.25 0-2 .75-2 1.97V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1Z"
          />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly stroke = input(1.75);
}
