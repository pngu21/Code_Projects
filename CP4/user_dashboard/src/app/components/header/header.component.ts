// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUserDetails } from '../../store/user/user.actions';
import { CommonModule } from '@angular/common';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatFormField, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchId: string = '';

  constructor(private store: Store) {}

  onSearch() {
    const id = parseInt(this.searchId, 10);
    if (id) {
      this.store.dispatch(loadUserDetails({ id }));
    }
  }
}
// export class HeaderComponent {
//   constructor(private router: Router) {}
//   searchId: any;
//   onSearch(event: any): void {
//     const userId = event.target.value;
//     if (userId) {
//       this.router.navigate(['/user', userId]);
//     }
//   }
// }
