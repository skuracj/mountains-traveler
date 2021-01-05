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
export class TimeLineComponent {
   @Input() stories: UserStory[];

    constructor(private storiesService: BaseStoriesService, private authService: BaseAuthService) {}


    addLike(relationId: string) {
        // this.storiesService.addLikeToStory(relationId, this.userId);
    }

    removeLike(relationId: string) {
        // this.storiesService.removeLikeFromStory(relationId, this.userId);
    }

    checkIfLiked(story: UserStory) {
        // return story.details.likes.includes(this.userId);
    }
}
