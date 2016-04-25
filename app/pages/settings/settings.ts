import {Page, NavController, NavParams, Platform} from 'ionic-angular';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
    template: require('./settings.html')
})
export class SettingsPage {
    user: any;

    constructor(http: Http) {
        this.user = http.get('http://slack.dev/api/v1/user/current')
    }
}