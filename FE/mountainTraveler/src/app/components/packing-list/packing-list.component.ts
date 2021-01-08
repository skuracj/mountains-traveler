import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PackingItem} from '../../common/models/packing-list';
import {FormGroup} from '@angular/forms';
import {BaseComponent} from '../../common/base/base.component';
import {BaseUserService} from '../../services/user/user.service';
import {BaseAuthService} from '../../services/auth/auth.service';
import {first, take, tap} from 'rxjs/operators';
import {BaseProfileService} from '../../services/profile/profile.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-packing-list',
    templateUrl: './packing-list.component.html',
    styleUrls: ['./packing-list.component.scss'],
})
export class PackingListComponent extends BaseComponent implements OnInit {
    @Input() title: string;

    public packingList: PackingItem[];
    public editMode = false;
    public newItemValue: string;

    constructor(
        private profileService: BaseProfileService) {
        super();
    }

    ngOnInit() {
        this.getPackingList();
    }

    getPackingList() {
        this.profileService.profile$.pipe(
            take(1),
            tap(user => {
                this.packingList = [...user.packingList];
                console.log('user', user);
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
        this.packingList[itemIndex] = {title: item.title, packed: !item.packed};
    }

    savePackingList() {
        const updatedList = this.packingList;
        this.profileService.updateUserPackingList(updatedList);
    }
}
