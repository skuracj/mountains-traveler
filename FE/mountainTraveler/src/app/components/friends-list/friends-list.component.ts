import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../common/models/user';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-friends-list',
    templateUrl: './friends-list.component.html',
    styleUrls: ['./friends-list.component.scss'],
})
export class FriendsListComponent implements OnInit {
    @Input() friendsIds: string[];
    friends$: Observable<User[]>;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getFriendsByIds();
    }

    getFriendsByIds() {
        if (this.friendsIds?.length > 1) {
            this.friends$ = this.userService.getUsersByIds(this.friendsIds);
        }
    }

}
