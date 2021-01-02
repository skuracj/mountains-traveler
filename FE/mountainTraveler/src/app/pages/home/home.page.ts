import {Component} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {AlertController, ModalController, NavController, Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import {ExternalUrls} from '../../common/constants/ExternalUrls.enum';
import {environment} from '../../../environments/environment';
import {PackingListComponent} from '../../components/packing-list/packing-list.component';
import {PackingItem} from '../../common/models/packing-list';
import {userMock} from '../../common/testing/mocks/user.mock';


@Component({
    selector: 'app-homepage',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage extends BaseComponent {
    public city: string;
    public externalUrls = ExternalUrls;
    public packingList: PackingItem[] = userMock.packingList;

    constructor(public navController: NavController,
                private storage: Storage,
                private platform: Platform,
                private iab: InAppBrowser,
                private alertController: AlertController,
                private modalController: ModalController) {
        super();
    }

    async ionViewWillEnter() {
        await this.setLocation();
    }

    async setLocation() {
        const storedCity = await this.storage.get(this.storageObject.city);
        this.city = storedCity ? storedCity : environment.defaultCity;
    }

    async onLocationChanged(event) {
        const selection = event.detail.value;
        this.city = selection;
        await this.storage.set(this.storageObject.city, selection);
    }

    async navigateToExternalUrl(url: string) {
        await this.platform.ready();
        const browser = this.iab.create(url, '_blank', 'location=off,hideurlbar=yes');
    }

    async showPackingListModal() {
        if (this.packingList) {
            const modal: HTMLIonModalElement = await this.modalController.create({
                component: PackingListComponent,
                componentProps: {
                    title: 'Packing list',
                }
            });

            await modal.present();
        }
    }

    async openConfirmationAlert() {
        const alert: HTMLIonAlertElement = await this.alertController.create({
            header: 'Confirm SOS !',
            message: 'Are You sure You want to call help?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Okay',
                    cssClass: 'sos',
                    handler: this.callSos,
                }
            ]
        });

        await alert.present();
    }

    callSos(): void {
        console.log('Calling sos...');
    }
}
