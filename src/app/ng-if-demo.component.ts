import { Component } from '@angular/core';

@Component({
  selector: 'ng-if-demo',
  standalone: true,
  template: `
    <h2>*ngIf Demo</h2>
    <button (click)="show = !show">Toggle</button>
    <p *ngIf="show">This text is conditionally shown.</p>
  `
})
export class NgIfDemoComponent {
  show = true;
}
