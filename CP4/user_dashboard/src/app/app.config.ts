import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
};


// src/app/app.config.ts
// import { Routes } from '@angular/router';
// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';

// export const routes: Routes = [
//   { path: '', component: UserListComponent },
//   { path: 'user/:id', component: UserDetailsComponent },
// ];
