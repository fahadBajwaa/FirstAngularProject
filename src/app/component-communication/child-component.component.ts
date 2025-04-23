import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>{{ message }}</p>
    <button (click)="sendNotification()">Notify Parent</button>
  `
})
export class ChildComponent {
  @Input() message!: string;    // The exclamation mark ! after the property name is a TypeScript feature called the "definite assignment assertion". It tells the TypeScript compiler that the property will be assigned a value at runtime, even if it doesn't appear to be initialized in the constructor.​
  @Output() notify = new EventEmitter<string>();

  sendNotification() {
    this.notify.emit('Hello from Child');
  }
}
