// src/app/ng-style-demo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // <-- import CommonModule
import { FormsModule } from '@angular/forms';    // <-- only if you also use [(ngModel)]

@Component({
  selector: 'ng-style-demo',
  standalone: true,
  imports: [
    CommonModule,    // provides ngIf, ngFor, ngClass, ngStyle :contentReference[oaicite:8]{index=8}
    FormsModule     // provides ngModel if you need two-way binding :contentReference[oaicite:9]{index=9}
  ],
  template: `
    <h2>ngStyle Demo</h2>
    <button (click)="increaseFontSize()">Increase Font Size</button>
    <p [ngStyle]="{ 'font-size.px': fontSize, color: 'blue' }">
      This text changes size.
    </p>
  `
})
export class NgStyleDemoComponent {
  fontSize = 14;

  increaseFontSize(): void {
    this.fontSize += 2;  // assignment lives here, in the class
  }
}

