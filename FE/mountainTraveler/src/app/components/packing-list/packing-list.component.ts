import {Component, Input, OnInit} from '@angular/core';
import {PackingItem} from '../../common/models/packing-list';
import {FormGroup} from '@angular/forms';
import {BaseComponent} from '../../common/base/base.component';
import {BaseUserService} from '../../services/user/user.service';
import {BaseAuthService} from '../../services/auth/auth.service';
import {first, tap} from 'rxjs/operators';

@Component({
    selector: 'app-packing-list',
    templateUrl: './packing-list.component.html',
    styleUrls: ['./packing-list.component.scss'],
})
export class PackingListComponent extends BaseComponent implements OnInit{
    @Input() title: string;

    public packingList: PackingItem[];

    editMode = false;
    newItemValue: string;

    constructor(
        private userService: BaseUserService) {
        super();
    }
    ngOnInit() {
        this.getPackingList();
    }

    getPackingList() {
        this.userService.user$.pipe(
            first(),
            tap(user => {
                this.packingList = [...user.packingList];
            })).subscribe();

    }


    addItemToList() {
        this.packingList.push({title: this.newItemValue, packed: false});
        this.newItemValue = null;
    }

    deleteItemFromList(index: number) {
        this.packingList.splice(index, 1);
    }

    toggleItem(item) {
        const itemIndex = this.packingList.findIndex(listItem => listItem === item);
        this.packingList[itemIndex] = { title: item.title, packed: !item.packed};
    }

    savePackingList() {
        const updatedList = this.packingList;
        this.userService.updateUserPackingList(updatedList);
    }
}
