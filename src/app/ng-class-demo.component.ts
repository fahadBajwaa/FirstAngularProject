import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-class-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>ngClass Demo</h2>
    <button (click)="toggle()">Toggle Class</button>
    <p [ngClass]="{ 'highlight': isSpecial }">Look at my style!</p>
  `,
  styles: [`
    .highlight { color: red; font-weight: bold; }
  `]
})
export class NgClassDemoComponent {
  isSpecial = false;
  toggle() { this.isSpecial = !this.isSpecial; }
}
