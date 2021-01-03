import {Component, OnInit} from '@angular/core';
import {MostActiveUsers} from '../../common/models/most-active-users';
import {BaseUserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-most-active-users',
    templateUrl: './most-active-users.component.html',
    styleUrls: ['./most-active-users.component.scss'],
})
export class MostActiveUsersComponent implements OnInit {
    mostActiveUsers$: Observable<MostActiveUsers[]>;

    constructor(private userService: BaseUserService) {
    }

    ngOnInit() {
        this.userService.getMostActiveUsers();
        this.mostActiveUsers$ = this.userService.mostActiveUsers$;
    }
}
