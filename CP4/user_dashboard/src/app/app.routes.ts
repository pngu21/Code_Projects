import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    { path: '', component: UserListComponent },
    { path: 'user/:id', component: UserDetailsComponent }
];

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes} from '@angular/router';
// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';
// import { routes } from './app.config';

// // const routes: Routes = [
// //   { path: '', component: UserListComponent },
// //   { path: 'user/:id', component: UserDetailsComponent },
// // ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }