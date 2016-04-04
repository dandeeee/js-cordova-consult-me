import 'es6-shim';
import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {IconPage} from './tabs/tabs';

@App({
  templateUrl: 'build/app.html',
  config: {} 
})
class MyApp {
  rootPage: any = IconPage;
  pages: Array<{title: string, component: any}>;
  isAndroid: boolean = false;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController) {
    this.isAndroid = platform.is('android');
    this.initializeApp();

    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Tabs', component: IconPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.menu.close();
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
