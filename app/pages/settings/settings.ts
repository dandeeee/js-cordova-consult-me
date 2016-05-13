import {Page} from 'ionic-angular';
import {NgZone} from 'angular2/core';
import {Camera} from "ionic-native";

@Page({
    templateUrl: 'build/pages/settings/settings.html'
})
export class SettingsPage {
  static get parameters() {
    return [NgZone];
  }
    user: any;
    apiUrl: string = '';
    image: any = null;

    constructor(private ngzone: NgZone) {
    }

    takepic() {
        var options = {
            destinationType: 0,
            sourceType: 1,
            encodingType: 0,
            quality:100,
            allowEdit: false,
            saveToPhotoAlbum: false
        };

        Camera.getPicture(options).then((data) => {
          let imgdata = "data:image/jpeg;base64," + data;
          this.ngzone.run( () => this.image = imgdata)
        });
    }
}