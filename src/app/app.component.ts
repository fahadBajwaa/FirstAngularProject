import { Component } from '@angular/core';
import { FirstComponent } from './first-component/first.component';
import { SecondComponent } from './second/second.component';
import { TestSCSSStylingsComponent } from "./test-scss-stylings/test-scss-stylings.component";

@Component({
  selector: 'app-root',
  imports: [ TestSCSSStylingsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-firstangular-project';
}
