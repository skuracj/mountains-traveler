import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PackingItem} from '../../common/models/packing-list';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    @Input() title: string;
    @Input() packingList?: PackingItem[];
    @Input() userSettings?: FormGroup;

    editMode = false;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    async dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        await this.modalController.dismiss({
            dismissed: true
        });
    }

}
