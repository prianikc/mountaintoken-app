import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private auth: AuthService,
    public authGuard: AuthGuardService) { }

  ngOnInit() {
  }
  logOut(): void {
    this.auth.logout();
  }
}


