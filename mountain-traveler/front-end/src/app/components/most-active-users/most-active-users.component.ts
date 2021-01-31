import {ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import {MostActiveUser} from '../../common/models/most-active-user';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-most-active-users',
    templateUrl: './most-active-users.component.html',
    styleUrls: ['./most-active-users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MostActiveUsersComponent extends BaseComponent {
    @Input() mostActiveUsers: MostActiveUser[];

    constructor() {
        super();
    }
}
