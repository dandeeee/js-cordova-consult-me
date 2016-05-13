import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MainTabs} from './tabs/tabs';
import {UserService} from "./common/services/user.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {LoginPage} from "./pages/login/login.page";
import {AppService} from "./common/services/app.service";



@App({
  templateUrl: 'build/app.html',
  config: {},
  providers: [
    HTTP_PROVIDERS,
    UserService,
    AppService
  ]
})
class ConsultMe {
  rootPage: any = LoginPage;
  isAndroid: boolean = false;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController) {
    this.isAndroid = platform.is('android');
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
