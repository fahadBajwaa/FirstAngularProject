import { Component } from '@angular/core';
import { FirstComponent } from './first-component/first.component';
import { SecondComponent } from './second/second.component';
import { TestSCSSStylingsComponent } from "./test-scss-stylings/test-scss-stylings.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ TestSCSSStylingsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // if it is Urls, then in square brackets
  // styleUrl: './app.component.css' //  we can reference .css or .scss
})


// An example of in-line styles:

// @Component({
//   selector: 'app-inline',
//   template: `<p class="highlight">Hello!</p>`,
//   styles: [`
//     .highlight {
//       background-color: yellow;
//       font-weight: bold;
//     }
//   `]
// })
// export class InlineComponent { }


export class AppComponent {
  title = 'my-firstangular-project';
}
