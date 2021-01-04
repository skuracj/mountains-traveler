import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-community',
    templateUrl: './community.page.html',
    styleUrls: ['./community.page.scss'],
})
export class CommunityPage extends BaseComponent implements OnInit {
    mockUserIds: string[] = ['anulka1_ID', 'mudzina1_ID'];
    userId = 'loggedInUser_ID';
    constructor() {
        super();
    }

    ngOnInit() {
    }

}
