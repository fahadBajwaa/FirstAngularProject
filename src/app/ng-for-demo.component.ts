import { Component } from '@angular/core';

@Component({
  selector: 'ng-for-demo',
  standalone: true,
  template: `
    <h2>*ngFor Demo</h2>
    <ul>
      <li *ngFor="let color of colors">{{ color }}</li>
    </ul>
  `
})
export class NgForDemoComponent {
  colors = ['Red', 'Green', 'Blue'];
}
