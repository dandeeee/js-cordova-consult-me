import {Page, List} from 'ionic-angular';
import {Message} from './components/message';

@Page({
    template: '<ion-navbar *navbar hideBackButton [attr.danger]="isAndroid ? \'\' : null"> <ion-title>Consult Me</ion-title></ion-navbar>'
    + '<ion-content><ion-list> <ion-item *ngFor="#message of messages">{{message.user}}</ion-item></ion-list></ion-content>'
})
export class ChatPage {
    messages: Array<Message>;
    constructor() {
        this.messages = [
            {
                message: 'Hi',
                user: 'unnamed'
            },
            {
                message: 'Hi',
                user: 'unnamed'
            },
            {
                message: 'Hi',
                user: 'unnamed'
            },
            {
                message: 'Hi',
                user: 'unnamed'
            },
            {
                message: 'Hi',
                user: 'unnamed'
            }
        ]
    }
}