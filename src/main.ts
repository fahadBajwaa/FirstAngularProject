import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { SecondComponent } from './app/second/second.component';
import {TestSCSSStylingsComponent} from './app/test-scss-stylings/test-scss-stylings.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// bootstrapApplication(SecondComponent);
bootstrapApplication(TestSCSSStylingsComponent);


