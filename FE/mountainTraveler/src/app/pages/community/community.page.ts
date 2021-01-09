import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Observable} from 'rxjs';
import {MostActiveUser} from '../../common/models/most-active-user';
import {Story} from '../../common/models/story';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {BaseUserService} from '../../services/user/user.service';

@Component({
    selector: 'app-community',
    templateUrl: './community.page.html',
    styleUrls: ['./community.page.scss'],
})
export class CommunityPage extends BaseComponent {
    public mostActiveUsers$: Observable<MostActiveUser[]>;
    public stories$: Observable<Story[]>;

    constructor(private storiesService: BaseStoriesService,
                private userService: BaseUserService) {
        super();
    }

    ionViewWillEnter() {
        this.getMostActiveUsers();
        this.getUsersStories();
    }

    getMostActiveUsers() {
        this.userService.getMostActiveUsers();
        this.mostActiveUsers$ = this.userService.mostActiveUsers$;
    }

    getUsersStories() {
        this.storiesService.getStories();
        this.stories$ = this.storiesService.stories$;
    }

}
