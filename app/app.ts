import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {MainTabs} from './tabs/tabs';



@App({
  templateUrl: 'build/app.html',
  config: {}
})
class ConsultMe {
  rootPage: any = MainTabs;
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
