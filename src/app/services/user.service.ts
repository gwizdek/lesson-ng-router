import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers() : Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => {
        let users = res.json();

        return users.map(user => {
          return {
            'id': user.id,
            'name': user.name
          };
        });
      });
  }

  getUser(userId: number) : Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .map(res => {
        let user = res.json();
        return user;
      })
      .catch(err => {
        return Observable.empty();
      })
      .share();
  }
}
