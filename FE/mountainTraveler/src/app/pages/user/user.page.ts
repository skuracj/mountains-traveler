import {Component, OnInit} from '@angular/core';
import {uuid4} from '@capacitor/core/dist/esm/util';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';
import {UserService} from '../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../common/models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage extends BaseComponent implements OnInit {
    userId: string;
    user$: Observable<User>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: UserService) {
        super();
    }

    ngOnInit() {
        this.activatedRoute.queryParams.pipe(
            map(queryParams => this.userId = queryParams[this.queryParamNames.userId]),
        ).subscribe();

        this.user$ = this.userService.getUserProfile(this.userId);
    }

}
