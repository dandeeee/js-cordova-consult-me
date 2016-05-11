import {Component} from 'angular2/core';

@Component({
    selector: 'message',
    templateUrl: './message.html'
})

export class Message {
    message: string;
    user: string;
    constructor() {
        
    }
}