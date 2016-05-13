import {Injectable} from 'angular2/core';

import {AppService} from './app.service';

declare var io;

@Injectable()
export class SocketService {
    socket: any;

    constructor(private appService: AppService) {
        this.socket = io(appService.socketHost, {});
    }

    on(event, callback) {
        this.socket.on(event, callback);
    }

    emit(event, data, callback) {
        this.socket.emit(event, data, callback);
    }
}