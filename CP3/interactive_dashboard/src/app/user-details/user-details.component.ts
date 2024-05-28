import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../search.service';
// import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  imports:[SearchService]
})
export class UserDetailsComponent implements OnInit {
  user: any;
  searchValue: string = '';

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.search$.subscribe(value => {
      this.searchValue = value;
      // Implement search logic here, for example, refetch users with filter
    });
    // const userId = this.route.snapshot.paramMap.get('id');
    // if (userId) {
    //   this.userService.getUserById(+userId).subscribe((response: any) => {
    //     this.user = response.data;
    //   });
    // }
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-details',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-details.component.html',
//   styleUrl: './user-details.component.css'
// })
// export class UserDetailsComponent {

// }
