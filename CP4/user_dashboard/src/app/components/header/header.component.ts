// src/app/components/header/header.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUserDetails } from '../../store/user/user.actions';

@Component({
  selector: 'app-header',
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
