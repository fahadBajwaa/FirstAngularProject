import { bootstrapApplication } from '@angular/platform-browser';  // Standalone API to bootstrap my root component
import { appConfig } from './app/app.config'; // App‑wide providers (router, change detection, etc.)
import { AppComponent } from './app/app.component'; // my root component
// import { SecondComponent } from './app/second/second.component';
import {TestSCSSStylingsComponent} from './app/test-scss-stylings/test-scss-stylings.component';

bootstrapApplication(AppComponent, appConfig).catch((err) => // Bootstraps AppComponent with the provided configuration
  console.error(err)
);

// bootstrapApplication(SecondComponent);
bootstrapApplication(TestSCSSStylingsComponent);


