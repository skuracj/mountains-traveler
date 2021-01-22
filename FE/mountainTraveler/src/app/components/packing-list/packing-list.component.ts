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
export class PackingListComponent extends BaseComponent implements OnInit {
    @Input() title: string;

    public packingList: PackingItem[];

    constructor(
        private profileService: BaseProfileService,
        private alertCtrl: AlertController) {
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

    async openAddModal() {
        const alert = await this.alertCtrl.create({
            inputs: [{
                    name: 'value',
                    placeholder: 'Add item here...',
                }],
            buttons: [{
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add item',
                    handler: item => {
                        console.log('Saved clicked', item.value);
                        this.addItemToList(item.value);
                    }
                }]
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
    }
}
