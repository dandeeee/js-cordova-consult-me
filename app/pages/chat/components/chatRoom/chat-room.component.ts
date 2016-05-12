import {Message} from "../message/message.component.ts";
import {Page, NavController, NavParams} from "ionic-angular/index";
import {Http, Headers, RequestOptions} from "angular2/http";
import {OnInit} from "angular2/core";
import {AppService} from "../../../../common/services/app.service";
import {UserService} from "../../../../common/services/user.service";
import {ChatsService} from "../../../../common/services/chats.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {SocketService} from "../../../../common/services/socket.service";

declare var moment: any;

@Page({
  templateUrl: 'build/pages/chat/components/chatRoom/chat-room.html',
  providers: [
    HTTP_PROVIDERS,
    ChatsService,
    SocketService
  ]
})
export class ChatRoom {
  messages: Array<Message>;
  interlocutor: any;
  chat: any;
  newMessage: any;

  constructor(private http: Http,
              private appService: AppService,
              private socketService: SocketService,
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

    this.socketService.emit('join', {
      chatId: this.chat['id'],
      userName: this.userService.user['first_name'] + ' ' + this.userService.user['last_name']
    }, () => console.log('join'));

    this.socketService.on('message', (data) =>
        this.messages.push(data[0])
    );
  }

  sendMessage() {
    this.chatService.sendMessage({
      user_id: this.userService.user['id'],
      chat_id: this.chat['id'],
      message: this.newMessage,
      date_of_creation: moment().format()
    })
        .subscribe(
            () => this.newMessage = '',
            () => console.log('send error')
        );
  }




}