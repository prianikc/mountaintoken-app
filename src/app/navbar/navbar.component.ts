import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show = false;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  toggleCollapse() {
    this.show = !this.show;
  }

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.loggedIn;
    this.isLoggedOut$ = this.auth.loggedOut;
  }
  logOut(): void {
    this.auth.logout();
  }
}
