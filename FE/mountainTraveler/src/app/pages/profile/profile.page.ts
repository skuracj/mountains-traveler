import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage extends BaseComponent implements OnInit {

  constructor(private storage: Storage) {
    super();
  }

  async ngOnInit() {
    await this.storage.set('region', 'Zakopane');
  }

  async ionViewDidEnter() {
    const region = await this.storage.get('region');

  }

}
