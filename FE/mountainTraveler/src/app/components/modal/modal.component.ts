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
    newItem: string;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    addItemToList() {
        this.packingList.push({title: this.newItem, packed: false});
        this.newItem = null;
    }

    deleteItemFromList(index: number) {
        this.packingList.splice(index, 1);
    }

    savePackingList() {
        // TODO update user profile object
        console.log('Saving list', this.packingList);
    }
    async dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        await this.modalController.dismiss({
            dismissed: true
        });
    }

}
