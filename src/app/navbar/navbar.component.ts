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


  toggleCollapse() {
    this.show = !this.show;
  }
  constructor(private auth: AuthService,
    public authGuard: AuthGuardService
  ) {
  }

  ngOnInit() {
  }

  logOut(): void {
    this.auth.logout();
    this.show = !this.show;
  }
}
