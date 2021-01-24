import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {User} from '../../common/models/user';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-friends-list',
    templateUrl: './friends-list.component.html',
    styleUrls: ['./friends-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsListComponent extends BaseComponent {
    @Input() friends: User[];

    public isExpanded = false;

    constructor() {
        super();
    }
}
