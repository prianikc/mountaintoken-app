import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Observable';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  show = false;
  // isLoggedIn$: Observable<boolean>;
  // isLoggedOut$: Observable<boolean>;

  toggleCollapse() {
    this.show = !this.show;
  }
  constructor(private auth: AuthService,
    private authGuard: AuthGuardService
  ) {
  }

  ngOnInit() {
  }

  logOut(): void {
    this.auth.logout();
  }
}
