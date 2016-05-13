import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';
import 'rxjs/Rx';


import {AppService} from './app.service';

@Injectable()
export class UserService {
  private creditance = {
    email: 'dima@gmail.com',
    password: 'dima'
  };

  public user:any;


  constructor(private http:Http,
              private appService:AppService) {
    // this.loginUser().subscribe(
    //     user => this.user = JSON.parse(user['_body'])
    // );
  }

  loginUser(creditance) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.appService.apiUrl + 'login', JSON.stringify(creditance), options)
      .map(this.extractData);
  }

  getCurrentUser() {
    return this.http.get(this.appService.apiUrl + 'user/current');
  }

  getAllUsers() {
    return this.http.get(this.appService.apiUrl + 'users');
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body || {};
  }

}
