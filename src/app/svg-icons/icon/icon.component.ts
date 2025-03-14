import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: false,
  template: `
    <svg
      class="icon"
      [attr.role]="'img'"
      [attr.aria-hidden]="ariaLabel ? null : 'true'"
      [attr.aria-label]="ariaLabel"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use [attr.href]="'#' + name"></use>
    </svg>
  `,
})
export class IconComponent {
  @Input() name!: string;
  @Input() ariaLabel?: string;
}
