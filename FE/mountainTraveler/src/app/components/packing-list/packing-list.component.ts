import {Component, Input} from '@angular/core';
import {PackingItem} from '../../common/models/packing-list';
import {FormGroup} from '@angular/forms';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-packing-list',
    templateUrl: './packing-list.component.html',
    styleUrls: ['./packing-list.component.scss'],
})
export class PackingListComponent extends BaseComponent{
    @Input() title: string;
    @Input() packingList?: PackingItem[];
    @Input() userSettings?: FormGroup;

    editMode = false;
    newItemValue: string;

    constructor() {
        super();
    }

    addItemToList() {
        this.packingList.push({title: this.newItemValue, packed: false});
        this.newItemValue = null;
    }

    deleteItemFromList(index: number) {
        this.packingList.splice(index, 1);
    }

    savePackingList() {
        // TODO update user profile object
        alert('saved');
        console.log('Saving list', this.packingList);
    }
}
