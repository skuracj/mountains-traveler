import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import { Storage } from '@ionic/storage';
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";



@Component({
  selector: 'app-people',
  templateUrl: 'people.page.html',
  styleUrls: ['people.page.scss']
})
export class PeoplePage extends BaseComponent implements OnInit {

  constructor(private storage: Storage) {
    super();
  }

  async ngOnInit() {
    // https://github.com/localForage/localForage/issues/910
    // Currently no fix for issue with storage.
    // Using hardcoded values
    // await this.storage.set('region', 'Warsaw');
  }

  onSegmentClicked(event: CustomEvent) {
    console.log(event.detail.value);
  }
}
