import {ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import {MostActiveUser} from '../../common/models/most-active-user';

@Component({
    selector: 'app-most-active-users',
    templateUrl: './most-active-users.component.html',
    styleUrls: ['./most-active-users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MostActiveUsersComponent implements OnDestroy{
    @Input() mostActiveUsers: MostActiveUser[];

    constructor() {
    }
    ngOnDestroy() {
        console.log('destroyed');
    }
}
