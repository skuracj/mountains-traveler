import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Sections} from '../../common/constants/Sections.enum';
import {KeyValue} from '@angular/common';
import {userMock} from '../../common/testing/mocks/user.mock';
import {User} from '../../common/models/user';

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

    constructor() {
        super();
    }

    async ngOnInit() {
        // TODO remove?
        this.selectedSection = Sections.me;
    }

    originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    }

    onSegmentClicked(event: CustomEvent) {
        this.selectedSection = event.detail.value;
    }


}
