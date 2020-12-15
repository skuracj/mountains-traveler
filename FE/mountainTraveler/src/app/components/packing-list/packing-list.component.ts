import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PackingItem} from '../../common/models/packing-list';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-packing-list',
    templateUrl: './packing-list.component.html',
    styleUrls: ['./packing-list.component.scss'],
})
export class PackingListComponent {
    @Input() title: string;
    @Input() packingList?: PackingItem[];
    @Input() userSettings?: FormGroup;

    editMode = false;
    newItemValue: string;

    constructor(private modalController: ModalController) {}

    addItemToList() {
        this.packingList.push({title: this.newItemValue, packed: false});
        this.newItemValue = null;
    }

    deleteItemFromList(index: number) {
        this.packingList.splice(index, 1);
    }

    savePackingList() {
        // TODO update user profile object
        console.log('Saving list', this.packingList);
    }
    async dismissModal() {
        await this.modalController.dismiss();
    }

}
