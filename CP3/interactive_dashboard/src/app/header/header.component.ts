import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router, private searchService: SearchService) {}

  onSearch(userId: string, searchValue: string): void {
    this.searchService.setSearchValue(searchValue);//console.log('Search value:', searchValue);
    if (userId) {
      this.router.navigate([`/user/${userId}`]);
    }
  }
}
