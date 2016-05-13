import {Injectable} from 'angular2/core';

@Injectable()
export class AppService {
    socketHost: string = 'http://slack.dev/';
    // socketHost: string = 'http://slack-consult-dev.vagrantshare.com/';

    apiUrl: string  = this.socketHost + 'api/v2/';
}