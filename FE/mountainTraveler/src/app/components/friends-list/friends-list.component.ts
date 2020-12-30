import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {BaseUserService, UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {BaseComponent} from '../../common/base/base.component';
import {uuid4} from '@capacitor/core/dist/esm/util';

@Component({
    selector: 'app-friends-list',
    templateUrl: './friends-list.component.html',
    styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent extends BaseComponent implements OnInit {
    @Input() friendsIds: string[];
    friends$: Observable<User[]>;
    public isExpanded = false;
    public id = uuid4();

    constructor(private userService: BaseUserService) {
        super();
    }

    ngOnInit() {
        this.getFriendsByIds();
    }

    getFriendsByIds() {
        if (this.friendsIds?.length > 0) {
            this.friends$ = this.userService.getUsersByIds(this.friendsIds);
        }
    }

}
