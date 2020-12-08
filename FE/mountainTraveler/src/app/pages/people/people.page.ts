import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Sections} from '../../common/constants/Sections.enum';
import {KeyValue} from '@angular/common';
import {user} from '../../common/testing/mocks/user.mock';
import {User} from '../../common/models/user';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss']
})
export class PeoplePage extends BaseComponent implements OnInit {
    selectedSection: string;
    sections = Sections;
    user: User = user;
    friendsIds = user.friendsIds;

    constructor(private storage: Storage, private router: Router) {
        super();
    }

    async ngOnInit() {
        this.selectedSection = Sections.me;

        // https://github.com/localForage/localForage/issues/910
        // Currently no fix for issue with storage.
        // Using hardcoded values
        // await this.storage.set('region', 'Warsaw');
    }
    originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    }

    onSegmentClicked(event: CustomEvent) {
        this.selectedSection = event.detail.value;
    }


}
