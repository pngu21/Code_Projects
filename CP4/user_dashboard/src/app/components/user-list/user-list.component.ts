// src/app/components/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { loadUsers } from '../../store/user/user.actions';
import { selectUsers, selectLoading, selectTotal } from '../../store/user/user.selectors';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardTitle } from '@angular/material/card';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  imports: [CommonModule, MatPaginatorModule, MatProgressBarModule, MatCardTitle,MatCard ]
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  total$: Observable<number>;
  currentPage: number = 1;

  constructor(private store: Store, private router: Router) {
    this.users$ = this.store.pipe(select(selectUsers));
    this.loading$ = this.store.pipe(select(selectLoading));
    this.total$ = this.store.pipe(select(selectTotal));
  }

  ngOnInit() {
    this.store.dispatch(loadUsers({ page: this.currentPage }));
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.store.dispatch(loadUsers({ page }));
  }

  onUserClick(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}

