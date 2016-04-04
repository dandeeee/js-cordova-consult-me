import {NavController, NavParams} from 'ionic-angular';
import {Page, ViewController, Platform} from 'ionic-angular';
import {ListPage} from './../pages/list/list';

@Page({
    template:
    '<ion-navbar *navbar hideBackButton [attr.danger]="isAndroid ? \'\' : null">' +
    '<ion-title>Consult Me</ion-title>' +
    '</ion-navbar>' +
    '<ion-content>' +
    '</ion-content>'
})
class TabIconPage {
    isAndroid: boolean = false;

    constructor(platform: Platform) {
        this.isAndroid = platform.is('android');
    }
    onPageWillEnter() {
        document.getElementById('md-tabs-icon').style.display = "block";
        document.getElementById('md-only').style.display = "none";
    }
}

@Page({
    template:
    '<ion-tabs class="tabs-icon">' +
    '<ion-tab tabIcon="contacts" [root]="consultsList"></ion-tab>' +
    '<ion-tab tabIcon="chatbubbles" [root]="chats"></ion-tab>' +
    '<ion-tab tabIcon="settings" [root]="settings"></ion-tab>' +
    '</ion-tabs>',
})
export class IconPage {
    consultsList = ListPage;
    chats = TabIconPage;
    settings = TabIconPage;

    onPageWillLeave() {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }
}