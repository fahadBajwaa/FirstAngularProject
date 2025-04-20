import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Core Angular API for standalone configuration
import { provideRouter } from '@angular/router'; // Router provider for standalone apps

import { routes } from './app.routes'; // My route definitions

export const appConfig: ApplicationConfig = {    // ApplicationConfig bundles providers at bootstrap
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),  // Set up Angular’s NgZone with event coalescing
    provideRouter(routes)]     // Initialize the router with my routes

};
