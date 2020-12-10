import {Component} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {NavController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ExternalUrls} from '../../common/constants/ExternalUrls.enum';
import {environment} from '../../../environments/environment';


@Component({
    selector: 'app-homepage',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage extends BaseComponent {
    public city: string;
    public externalUrls = ExternalUrls;

    constructor(public navController: NavController,
                private storage: Storage,
                private platform: Platform,
                private iab: InAppBrowser) {
        super();
    }

    async ionViewWillEnter() {
        const storedCity = await this.storage.get(this.storageObject.city);
        this.city = storedCity ? storedCity : environment.defaultCity;
    }

    async onSelectChanged(event) {
        const selection = event.detail.value;
        this.city = selection;
        await this.storage.set(this.storageObject.city, selection);
    }

    async navigateToExternalUrl(url: string) {
        await this.platform.ready();
        const browser = this.iab.create(url, '_blank', 'location=off,hideurlbar=yes');
    }
}
