import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions, Response} from 'angular2/http';
import { Observable } from 'rxjs/Observable';
@Page({
    templateUrl: 'build/pages/settings/settings.html',
    providers:  [
        HTTP_PROVIDERS
    ]
})
export class SettingsPage {
    user: any;
    apiUrl: string = '';

    constructor(private http: Http) {
        
    }

    getUser(email: string, password: string): Observable<any> {
        let body = JSON.stringify({'email': email, 'password': password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl + 'login', body, options);
    }

    getUsers(): Observable<any> {
        return this.http.get(this.apiUrl + 'users');
    }

    getCurrentUser(): Observable<any> {
        return this.http.get(this.apiUrl + 'user/current');
    }
}