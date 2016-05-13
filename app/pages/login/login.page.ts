import {Page, NavController} from 'ionic-angular';
import {HTTP_PROVIDERS, Http, Response} from "angular2/http";
import {UserService} from "../../common/services/user.service";
import {MainTabs} from "../../tabs/tabs";
import {AppService} from "../../common/services/app.service";

@Page({
  templateUrl: 'build/pages/login/login.html'
  // providers: [
  //   HTTP_PROVIDERS,
  //   UserService,
  //   AppService
  // ]
})
export class LoginPage {
  loginData: any = {};

  constructor(private http: Http,
              private nav: NavController,
              private userService: UserService) {
  }

  login() {
    this.userService.loginUser(this.loginData)
      .subscribe( user => {
        this.userService.user = user;
        this.nav.push(MainTabs);
      });
  }
}
