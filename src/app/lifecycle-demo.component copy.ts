import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'lifecycle-demo',
  standalone: true,
  template: `
    <h2>Lifecycle Demo</h2>
    <p>Check the console for hook logs.</p>
  `
})
export class LifecycleDemoComponent implements OnInit, OnDestroy {
  constructor() {
    console.log('Constructor: Component created');
  }

  ngOnInit() {
    console.log('ngOnInit: Initialization logic here');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Cleanup logic here');
  }
}
