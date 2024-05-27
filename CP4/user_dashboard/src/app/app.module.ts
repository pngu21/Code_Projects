// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserStoreModule } from './store/user.module';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoadingDirective } from './directives/loading.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    // LoadingDirective,
    // MatToolbarModule,
    // MatCardModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    // MatPaginatorModule

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    routes,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    UserStoreModule,
    LoadingDirective,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule,
  ],
  // exports: [
  //   BrowserModule,
  //   BrowserAnimationsModule,
  //   HttpClientModule,
  //   FormsModule,
  //   CommonModule,
  //   routes,
  //   UserStoreModule,
  //   MatCardModule,
  //   MatProgressSpinnerModule,
  //   MatProgressBarModule,
  //   MatPaginatorModule,
  // ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
