import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Sections} from '../../common/constants/Sections.enum';
import {KeyValue} from '@angular/common';
import {userMock} from '../../common/testing/mocks/user.mock';
import {User} from '../../common/models/user';
import {ModalController} from '@ionic/angular';
import {UserSettingsPage} from '../../components/user-settings/user-settings.page';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss']
})
export class PeoplePage extends BaseComponent implements OnInit {
    selectedSection: string;
    sections = Sections;
    user: User = userMock;
    friendsIds: string[] = userMock.friendsIds;

    constructor(private modalController: ModalController) {
        super();
    }

    async ngOnInit() {
        // TODO remove?
        this.selectedSection = Sections.me;
    }


    originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    };

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
