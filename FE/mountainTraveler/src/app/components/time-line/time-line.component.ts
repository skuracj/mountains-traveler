import {ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {UserStory} from '../../common/models/story';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {Observable} from 'rxjs';
import {BaseAuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeLineComponent implements OnInit, OnChanges {
    @Input() usersIds: string[] = [];
    userId;
    stories$: Observable<UserStory[]>;


    constructor(private storiesService: BaseStoriesService, private authService: BaseAuthService) {
    }

    ngOnInit() {
        this.userId = this.authService.getUserId();
        this.stories$ = this.storiesService.stories$;
        this.getUsersStories();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.usersIds.previousValue !== changes.usersIds.currentValue) {
            this.getUsersStories();
        }
    }

    getUsersStories() {
        if (this.usersIds.length) {
            this.storiesService.getStoriesByUserIds(this.usersIds);
        } else {
            this.storiesService.getStories();
        }
    }

    addLike(relationId: string) {
        this.storiesService.addLikeToStory(relationId, this.userId);
    }

    removeLike(relationId: string) {
        this.storiesService.removeLikeFromStory(relationId, this.userId);
    }

    checkIfLiked(story: UserStory) {
        return story.details.likes.includes(this.userId);
    }
}
