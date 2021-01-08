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
export class CommunityPage extends BaseComponent implements OnInit {
    public mostActiveUsers$: Observable<MostActiveUser[]>;
    public stories$: Observable<Story[]>;

    userId = 'loggedInUser_ID';
    constructor(private storiesService: BaseStoriesService,
                private userService: BaseUserService) {
        super();
    }

    ngOnInit() {
        this.mostActiveUsers$ = this.userService.mostActiveUsers$;
        this.stories$ = this.storiesService.stories$;


    }

}
