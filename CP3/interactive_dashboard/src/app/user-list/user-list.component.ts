// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchService } from '../search.service';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  isLoading = false;
  page: number = 1;
  searchValue: string = '';

  constructor(private http: HttpClient, private searchService: SearchService) {} //userService: UserService or http: HttpClient

  ngOnInit() {
    this.fetchUsers();
    this.searchService.search$.subscribe(value => {
      this.searchValue = value;
      // Implement search logic here, for example, refetch users with filter
    });
    // this.loadUsers(1);
  }

  fetchUsers() {
    this.http.get(`https://reqres.in/api/users?page=${this.page}`).subscribe((response: any) => {
      this.users = response.data;
    });
  }
  // loadUsers(page: number) {
  //   this.isLoading = true;
  //   this.userService.getUsers(page).subscribe(data => {
  //     this.users = data.data;
  //     this.isLoading = false;
  //   });
  // }

  nextPage() {
    this.page++;
    this.fetchUsers();
  }
  // viewUser(id: number) {
  //   this.userService.getUser(id);
  // }


  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.fetchUsers();
    }
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.css'
// })
// export class UserListComponent {

// }
