import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';

import {AppService} from './app.service';

@Injectable()
export class UserService {
    private creditance = {
        email: 'dima@gmail.com',
        password: 'dima'
    };
    
    public user: any;


    constructor(private http: Http,
                private appService: AppService)
    {
      this.loginUser().subscribe(
          user => this.user = JSON.parse(user['_body'])
      );
    }

    loginUser() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.appService.apiUrl + 'login', JSON.stringify(this.creditance), options);
    }

    getCurrentUser() {
      return this.http.get(this.appService.apiUrl + 'user/current');
    }

    getAllUsers() {
      return this.http.get(this.appService.apiUrl + 'users');
    }
}