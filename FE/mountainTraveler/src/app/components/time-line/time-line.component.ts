import {Component, Input} from '@angular/core';
import {UserStory} from '../../common/models/story';
import {BaseStoriesService, StoriesService} from '../../services/stories/stories.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent {
    @Input() usersIds: string[] = [];
    @Input() userId?: string;

    constructor(private storiesService: BaseStoriesService) {
    }

    getUsersStories(): Observable<UserStory[]> {
        if (this.usersIds.length) {
            return this.storiesService.getStories(this.usersIds);
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
