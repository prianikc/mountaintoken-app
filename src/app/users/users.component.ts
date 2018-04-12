import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MntApiService } from '../mnt-api.service';
import { User } from '../user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public res: {
    message: string,
    Users: [
      {
        email: string
      }
    ]
  };

  constructor(private mntApiservice: MntApiService) { }

  ngOnInit() {
    this.getMntUsers();
  }
  getMntUsers() {
    this.mntApiservice.getUsers()
      .subscribe(res => {
        this.res = res;
      });
  }
}
