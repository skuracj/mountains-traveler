import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage extends BaseComponent{

  constructor() {
    super()
  }

}
