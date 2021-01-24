import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';
import {BaseUserService} from '../../services/user/user.service';
import {Observable} from 'rxjs';
import {User} from '../../common/models/user';
import {Story} from '../../common/models/story';
import {BaseStoriesService} from '../../services/stories/stories.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss']
})
export class UserPage extends BaseComponent {
    userId: string;
    user$: Observable<User>;
    userStories$: Observable<Story[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: BaseUserService,
        private storiesService: BaseStoriesService) {
        super();
    }

    ionViewWillEnter() {
        this.extractUserIdFromQueryParam();
        this.getUser();
        this.getUserStories();
    }

    extractUserIdFromQueryParam() {
        this.activatedRoute.queryParams.pipe(
            take(1),
            map(queryParams => this.userId = queryParams[this.queryParamNames.userId]),
        ).subscribe();
    }

    getUser() {
        this.userService.getUserProfileById(this.userId);
        this.user$ = this.userService.user$;
    }
    getUserStories() {
        this.storiesService.getStoriesByUserIds([this.userId]);
        this.userStories$ = this.storiesService.stories$;
    }
}
