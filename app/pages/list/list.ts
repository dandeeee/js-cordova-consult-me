import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';
import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  isAndroid: boolean;
  temp: string;

  constructor(private nav: NavController, navParams: NavParams, platform: Platform, http: Http) {
    this.selectedItem = navParams.get('item');
    this.isAndroid = platform.is('android');

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    http.get('http://slack.dev/api/v1/user/current').subscribe(response => {
          this.temp = response.text();
        });

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.nav.push(ItemDetailsPage, {
      item: item
    });
  }
}
