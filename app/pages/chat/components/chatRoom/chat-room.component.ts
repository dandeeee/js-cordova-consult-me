import {Message} from "../message/message.component.ts";
import {Page, NavController, NavParams} from "ionic-angular/index";
import {Http, Headers, RequestOptions} from "angular2/http";
import {OnInit} from "angular2/core";
import {AppService} from "../../../../common/services/app.service";
import {UserService} from "../../../../common/services/user.service";
import {ChatsService} from "../../../../common/services/chats.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Page({
  templateUrl: 'build/pages/chat/components/chatRoom/chat-room.html',
  providers: [
    HTTP_PROVIDERS,
    ChatsService
  ]
})
export class ChatRoom {
  messages: Message;
  interlocutor: any;
  chat: any;

  constructor(private http: Http,
              private appService: AppService,
              private userService: UserService,
              private nav: NavController,
              private chatService: ChatsService,
              navParams: NavParams) {
    this.interlocutor = navParams.get('selectedUser');
    this.chat = navParams.get('chat');
  }

  ngOnInit() {
    let body = {
      user_id: this.userService.user['id'],
      chat_id: this.chat['id']
    };
    this.chatService.getMessages(body).subscribe( messages => this.messages = JSON.parse(messages['_body']) );
  }
}