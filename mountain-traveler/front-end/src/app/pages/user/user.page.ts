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
    styleUrls: ['./user.page.scss'],
})
export class UserPage extends BaseComponent {
    user$: Observable<User>;
    userStories$: Observable<Story[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userService: BaseUserService,
        private storiesService: BaseStoriesService) {
        super();
    }

    ionViewWillEnter() {
        this.activatedRoute.queryParams.pipe(
            take(1),
            map(queryParams => {
                const userId = queryParams[this.queryParamNames.userId];

                this.getUser(userId);
                this.getUserStories(userId);
            }),
        ).subscribe();
    }

    getUser(userId: string) {
        this.user$ = this.userService.getUserProfileById(userId);
    }

    getUserStories(userId: string) {
        this.storiesService.getStoriesByUserIds([userId]);
        this.userStories$ = this.storiesService.stories$;
    }
}
