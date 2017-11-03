import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../services/user.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterViewInit {

  user: any = {
    id: 0,
    name: '',
    address: {
      city: '',
      street: '',
      suite: ''
    }
  };
  loading: boolean = false;

  imgUrl: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.imgUrl = '';
  }

  ngOnInit() {
    this.route.paramMap
      .do((params: ParamMap) => {
        this.loading = true;
      })
      .switchMap((params: ParamMap) =>
        this.userService.getUser(+params.get('id')))
      .subscribe(user => {
        this.user = user;
        this.imgUrl = 'https://placeimg.com/320/200/people&id='+user.id;
      });
  }

  ngAfterViewInit() {
  }


  onNext() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['user', ++id]);
  }

}
