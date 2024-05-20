import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interactive_dashboard';
}
