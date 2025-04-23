import { Component } from '@angular/core';
import { ChildComponent} from './child-component.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child [message]="parentMessage" (notify)="onNotify($event)"></app-child>
  `
})
export class ParentComponent {
  parentMessage = 'Hello from Parent';

  onNotify(message: string) {
    console.log('Received from child:', message);
  }
}
