import {Component, Input, OnInit} from '@angular/core';
import {PackingItem} from '../../common/models/packing-list';
import {BaseComponent} from '../../common/base/base.component';
import {take, tap} from 'rxjs/operators';
import {BaseProfileService} from '../../services/profile/profile.service';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-packing-list',
    templateUrl: './packing-list.component.html',
    styleUrls: ['./packing-list.component.scss'],
})
export class PackingListComponent extends BaseComponent implements OnInit{
    @Input() title: string;

    public packingList: PackingItem[];

    constructor(
        private profileService: BaseProfileService,
        private alertController: AlertController) {
        super();
    }

    async ngOnInit() {
        await this.getPackingList();
    }

   async getPackingList() {
        await this.profileService.loadUserProfile();
        this.profileService.profile$.pipe(
            take(1),
            tap(user => {
                this.packingList = [...user.packingList];
            })).subscribe();
    }


    async openAddModal() {
        const alert = await this.alertController.create({
            header: 'Add new item',
            inputs: [{
                name: 'value',
                placeholder: 'e.g water...',
            }],
            buttons: [{
                text: 'Cancel',
            },
                {
                    text: 'Add',
                    handler: item => this.addItemToList(item.value),
                }],
        });
        await alert.present();
    }

    addItemToList(item: string) {
        this.packingList.push({title: item, packed: false});
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
        alert('Packing list saved');

    }
}
