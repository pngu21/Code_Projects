// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get(`https://reqres.in/api/users?page=${this.page}`).subscribe((response: any) => {
      this.users = response.data;
    });
  }

  nextPage() {
    this.page++;
    this.fetchUsers();
  }

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
