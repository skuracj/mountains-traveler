import { Component, OnInit } from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage extends BaseComponent{
  slideOpts = {
    initialSlide: 0,
  };
  constructor(public navController: NavController) {
    super();
  }
}
