import {Injectable} from 'angular2/core';

import {Http} from 'angular2/http';
import {AppService} from './app.service';
import {RequestOptions} from "angular2/http";
import {Headers} from "angular2/http";

declare var io: any;

@Injectable()
export class ChatsService {

    constructor(private http: Http,
                private appService: AppService)
    { }

    getAllPublicChats() {
        return this.http.get(this.appService.apiUrl + 'chats');
    }

    getMessages(body) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.appService.apiUrl + 'message', JSON.stringify(body), options);
    }

    sendMessage(body) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.appService.apiUrl + 'newMessage', JSON.stringify(body), options);
    }
}