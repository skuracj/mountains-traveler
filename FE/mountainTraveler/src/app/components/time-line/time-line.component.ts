import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {BaseAuthService} from '../../services/auth/auth.service';
import {Story} from '../../common/models/story';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent {
   @Input() stories: Story[];

    constructor(private storiesService: BaseStoriesService, private authService: BaseAuthService) {}
// pass stories ids and call service from this component
// add changeDetection.onPush
    addLike(relationId: string) {
        // this.storiesService.addLikeToStory(relationId, this.userId);
    }

    removeLike(relationId: string) {
        // this.storiesService.removeLikeFromStory(relationId, this.userId);
    }

    checkIfLiked(story: Story) {
        // return story.details.likes.includes(this.userId);
    }
}
