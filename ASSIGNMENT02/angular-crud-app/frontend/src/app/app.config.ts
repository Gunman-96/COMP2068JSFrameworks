import { ApplicationConfig } from '@angular/core';
import { ROUTES, provideRouter } from '@angular/router';

import { AppRoutingModule, AppModule } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
