import {Page, List} from 'ionic-angular';
import { OnInit } from 'angular2/core';
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {ChatsService} from "../../common/services/chats.service";
import {ChatRoom} from "./components/chatRoom/chat-room.component";
import {SocketService} from "../../common/services/socket.service";
import {NavParams} from "ionic-angular/index";
import {NavController} from "ionic-angular/index";

@Page({
    templateUrl: 'build/pages/chat/chat.html',
    providers: [
        HTTP_PROVIDERS,
        ChatsService,
        SocketService
    ]
})
export class ChatPage implements OnInit {
    chats: Array<ChatRoom>;

    constructor(private nav: NavController,
                navParams: NavParams,
                private http: Http,
                private chatsService: ChatsService,
                private socketService: SocketService)
    { }

    ngOnInit() {
        this.chatsService.getAllPublicChats().subscribe( chats => this.chats = JSON.parse(chats['_body']) );
        this.socketService.on('connect', msg => console.log('blabla'));
    }

    itemTapped(event, item) {
        this.nav.push(ChatRoom, {
            chat: item
        });
    }
}