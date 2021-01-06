import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';
import {BaseUserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {User} from '../../common/models/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss']
})
export class UserPage extends BaseComponent {
    userId: string;
    user$: Observable<User>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: BaseUserService) {
        super();
    }

    ionViewWillEnter() {
        this.activatedRoute.queryParams.pipe(
            take(1),
            map(queryParams => this.userId = queryParams[this.queryParamNames.userId]),
        ).subscribe();

        this.userService.getUserProfileById(this.userId);
        this.user$ = this.userService.user$;
    }

}
