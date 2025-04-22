import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ng-model-demo',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Two-way Binding Demo</h2>
    <input [(ngModel)]="username" placeholder="Enter your name">
    <p>Hello, {{ username }}!</p>
  `
})
export class NgModelDemoComponent {
  username = '';
}
