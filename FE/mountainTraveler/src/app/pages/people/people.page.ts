import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Sections} from '../../common/constants/Sections.enum';
import {User} from '../../common/models/user';
import {ModalController} from '@ionic/angular';
import {UserSettingsPage} from '../../components/user-settings/user-settings.page';
import {Utils} from '../../common/utils';
import {BaseUserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss']
})
export class PeoplePage extends BaseComponent implements OnInit {
    selectedSection: string;
    sections = Sections;
    user: User;
    friendsIds: string[];

    originalOrder = Utils.originalOrder;

    constructor(
        private modalController: ModalController,
        private userService: BaseUserService) {
        super();
    }

    async ngOnInit() {
        this.selectedSection = Sections.me;

        this.userService.user$.pipe(tap(
            user => {
                this.user = user;
                this.friendsIds = [...user.friendsIds];
            }
        )).subscribe();
    }

    ionViewWillEnter() {
        console.log('this.ionViewWillEnter()');
        // this.userService.loadUserData();
    }

    onSegmentClicked(event: CustomEvent) {

        this.selectedSection = event.detail.value;

    }

    async openSettingsModal() {
        if (this.user) {
            const modal: HTMLIonModalElement = await this.modalController.create({
                component: UserSettingsPage,
                componentProps: {
                    user: this.user
                }
            });
            await modal.present();
        }
    }


}
