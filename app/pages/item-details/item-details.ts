import {Page, NavController, NavParams} from 'ionic-angular';
import {UserService} from "../../common/services/user.service";
import {ChatRoom} from "../chat/components/chatRoom/chat-room.component";
import {ChatsService} from "../../common/services/chats.service";


@Page({
  templateUrl: 'build/pages/item-details/item-details.html',
  providers: [
    ChatsService
  ]
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(private nav: NavController, 
              navParams: NavParams, 
              private userService: UserService,
              private chatService: ChatsService) {
    this.selectedItem = navParams.get('item');
  }

  gotoChat(selectedUser) {
    this.chatService.findOrCreateChat({
      user_id: this.userService.user['id'],
      selected_user_id: selectedUser['id'],
      is_private: true,
      name: this.userService.user['first_name'] + ', ' + selectedUser['first_name']
    })
      .subscribe( chats => {
        debugger;
        let chat = this.getChat(chats);
        this.nav.push(ChatRoom, {
          selected_user_id: selectedUser['id'],
          chat: chat
        });
      });
  }

  private getChat(data) {
    let chats = JSON.parse(data['_body']);
    return chats[0] ? chats[0] : chats;
  }
}
