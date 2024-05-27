// src/app/components/user-details/user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetails } from '../../models/user.model';
import { loadUserDetails } from '../../store/user/user.actions';
import { selectUserDetails, selectLoading } from '../../store/user/user.selectors';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardContent } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatCardContent,MatCardTitle,MatCard ],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDetails$: Observable<UserDetails | null>;
  loading$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    this.userDetails$ = this.store.pipe(select(selectUserDetails));
    this.loading$ = this.store.pipe(select(selectLoading));
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const parsedId = parseInt(id, 10);
      if (!isNaN(parsedId)) {
        this.store.dispatch(loadUserDetails({ id: parsedId }));
      } else {
        // Handle the case where the ID is not a number
        this.router.navigate(['/']);
      }
    } else {
      // Handle the case where the ID is null
      this.router.navigate(['/']);
    }
  }

  onBack() {
    this.router.navigate(['/']);
  }
}

