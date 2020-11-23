import {Component} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {NavController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {UserLocation} from '../../common/models/user-location';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';


@Component({
    selector: 'app-homepage',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage extends BaseComponent {
    city;

    constructor(public navController: NavController,
                private storage: Storage,
                private platform: Platform,
                private iab: InAppBrowser) {
        super();
    }

    async ionViewWillEnter() {
        this.city = await this.storage.get('city') ? await this.storage.get('city') : 'Zakopane';

    }

    async onSelectChanged(event) {
        const selection = event.detail.value;
        this.city = selection;

        await this.storage.set('city', selection);
    }

    async navigateToExternalUrl() {
        await this.platform.ready();
        const browser = this.iab.create('https://ionicframework.com/' ,'_blank');
        // browser.show();

    }
}
