import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import {Http, HTTP_PROVIDERS } from 'angular2/http';

import {ItemDetailsPage} from '../item-details/item-details';
import {UserService} from "../../common/services/user.service";

@Page({
  templateUrl: 'build/pages/list/list.html',
  providers: [
      HTTP_PROVIDERS
  ]
})
export class ListPage {
  selectedItem: any;
  users: any;  
  isAndroid: boolean;
  user: any = {
      'email': 0,
      'password': 0
  };

  constructor(private nav: NavController,
              navParams: NavParams,
              platform: Platform,
              http: Http,
              private userService: UserService) {
    this.selectedItem = navParams.get('item');
    this.isAndroid = platform.is('android');
    this.userService.getCurrentUser().subscribe( user => this.user = JSON.parse(user['_body']));
    this.userService.getAllUsers().subscribe( users => this.users = JSON.parse(users["_body"]) );
  }

  

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}
