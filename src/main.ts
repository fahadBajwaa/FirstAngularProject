import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import { NgModelDemoComponent } from './app/ng-model-demo.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

// bootstrapApplication(NgModelDemoComponent).catch(err => console.error(err));