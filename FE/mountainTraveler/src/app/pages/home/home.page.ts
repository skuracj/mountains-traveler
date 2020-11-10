import {Component} from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-homepage',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage extends BaseComponent{

  constructor(public navController: NavController) {
    super()
  }

}
