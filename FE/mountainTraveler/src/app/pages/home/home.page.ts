import {Component, Injector} from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";

@Component({
  selector: 'app-homepage',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage extends BaseComponent{

  constructor() {
    super()
  }

}
