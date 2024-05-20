// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideClientHydration } from '@angular/platform-browser';
// import { provideStore } from '@ngrx/store';

// import { provideHttpClient } from '@angular/common/http';
// import { importProvidersFrom } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { UserListComponent } from './user-list/user-list.component';

// // export const appConfig: ApplicationConfig = {
// //   providers: [provideRouter(routes), provideClientHydration(), provideStore()]
// // };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     importProvidersFrom(BrowserModule),
//     provideHttpClient(),
//     { provide: 'declarations', useValue: [AppComponent, HeaderComponent, UserListComponent] }
//   ]
// };

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withFetch())
  ]
};
