import {Component} from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {NavController} from "@ionic/angular";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-homepage',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage extends BaseComponent {
    region: string;

    constructor(public navController: NavController,
                private storage: Storage) {
        super()

    }

    async ionViewWillEnter() {
        this.region = await this.storage.get('region');
    }
}
