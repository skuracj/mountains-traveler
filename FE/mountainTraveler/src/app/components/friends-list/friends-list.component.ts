import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {BaseUserService, UserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-friends-list',
    templateUrl: './friends-list.component.html',
    styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent extends BaseComponent implements OnInit {
    @Input() friendsIds: string[];

    public friends$: Observable<User[]>;
    public isExpanded = false;

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
