import {Component, Input, OnInit} from '@angular/core';
import {RouteSegment} from '../../common/constants/RouteSegments.enum';
import {ComponentType} from '../../common/constants/ComponentType.enum';
import {ModalController} from '@ionic/angular';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent{
    @Input() headerTitle: string;
    @Input() displayMode: ComponentType;
    @Input() defaultHref?: string = RouteSegment.app;

    constructor(private modalController: ModalController) {
        super();
    }

    async dismissModal() {
        await this.modalController.dismiss();
    }

}
