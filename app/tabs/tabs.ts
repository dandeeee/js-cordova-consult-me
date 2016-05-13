import {Page, ViewController, Platform} from 'ionic-angular';
import {ListPage} from './../pages/list/list';
import {ChatPage} from './../pages/chat/chat';
import {SettingsPage} from './../pages/settings/settings';
import {AppService} from "../common/services/app.service";
import {UserService} from "../common/services/user.service";
import {Http} from "angular2/http";
import {OnInit} from "angular2/core";

@Page({
    templateUrl: 'build/tabs/tabs.html'
    // providers: [
    //     AppService,
    //     UserService
    // ]
})
export class MainTabs implements OnInit {
    consultsList = ListPage;
    chats        = ChatPage;
    settings     = SettingsPage;

    constructor(
        private http: Http) {
        
    }
    
    onPageWillLeave() {
        document.getElementById('md-tabs-icon').style.display = "none";
        document.getElementById('md-only').style.display = "block";
    }

    ngOnInit() {
        // this.userService.loginUser().subscribe(user => this.user = JSON.parse(user["_body"]));
    }
}