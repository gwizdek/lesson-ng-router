import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users$: Observable<any>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit() {
  }

  navUserDetails(userId: number) {
    this.router.navigate(['user', userId]);
  }

}
