import {Page, NavController, NavParams} from 'ionic-angular';
import {UserService} from "../../common/services/user.service";
import {ChatRoom} from "../chat/components/chatRoom/chat-room.component";


@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(private nav: NavController, navParams: NavParams, private userService: UserService) {
    this.selectedItem = navParams.get('item');
  }

  gotoChat(selectedUser) {
    this.nav.push(ChatRoom, {
      selectedUser: selectedUser
    });
  	console.log(selectedUser);
  }
}
