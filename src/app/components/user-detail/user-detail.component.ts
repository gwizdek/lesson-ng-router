import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: any;
  loading: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    // this.user$ = this.userService.getUser(2);
  }

  ngOnInit() {

    // this.user$ = this.userService.getUser(+this.route.snapshot.paramMap.get('id'));

    this.route.paramMap
      .do((params: ParamMap) => {
        this.loading = true;
      })
      .switchMap((params: ParamMap) =>
        this.userService.getUser(+params.get('id')))
      .subscribe(user => {
        this.user = user;
        
      });
  }

  onNext() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['user', ++id]);
  }

}
