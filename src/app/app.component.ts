import { Component } from '@angular/core';
import { FirstComponent } from './first-component/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  imports: [FirstComponent, SecondComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-firstangular-project';
}
