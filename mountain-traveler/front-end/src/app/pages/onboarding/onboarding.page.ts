import {Component, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from "../../common/base/base.component";
import {IonSlides, NavController} from "@ionic/angular";


@Component({
    selector: 'app-onboarding',
    templateUrl: './onboarding.page.html',
    styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage extends BaseComponent {
    slideOpts = {
        initialSlide: 0,
    };
    @ViewChild('slides') slides: IonSlides;

    constructor(public navController: NavController) {
        super();
    }
}
