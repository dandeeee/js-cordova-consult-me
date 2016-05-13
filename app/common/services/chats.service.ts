import {Injectable} from 'angular2/core';

import {Http, URLSearchParams} from 'angular2/http';
import {AppService} from './app.service';
import {RequestOptions} from "angular2/http";
import {Headers} from "angular2/http";
import {UserService} from "./user.service";

declare var io:any;

@Injectable()
export class ChatsService {

  constructor(private http:Http,
              private appService:AppService,
              private userService: UserService) {
  }

  getChats() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('user_id', this.userService.user['id']);
    return this.http.get(this.appService.apiUrl + 'chats', {
      search: params
    });
  }

  getMessages(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.appService.apiUrl + 'message', JSON.stringify(body), options);
  }

  sendMessage(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.appService.apiUrl + 'newMessage', JSON.stringify(body), options);
  }

  findOrCreateChat(body) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.appService.apiUrl + 'chat/findOrCreate', JSON.stringify(body), options);
  }

}