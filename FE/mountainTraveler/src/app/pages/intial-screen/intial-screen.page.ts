import { Component } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-intial-screen',
  templateUrl: './intial-screen.page.html',
  styleUrls: ['./intial-screen.page.scss'],
})
export class IntialScreenPage extends BaseComponent{

  constructor(public navController: NavController) {super() }
}
