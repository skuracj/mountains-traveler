import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {BaseAuthService} from '../../services/auth/auth.service';
import {Story} from '../../common/models/story';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeLineComponent implements OnInit{
   @Input() stories: Story[];
   @Input() userOverview? = false;

   private userId: string;

    constructor(
        private storiesService: BaseStoriesService,
        private authService: BaseAuthService) {}

    ngOnInit() {
        this.userId = this.authService.getUserId();
    }

    toggleLike(storyId: string) {
        this.storiesService.toggleLike(storyId, this.userId);
    }

    checkIfLiked(story: Story) {
        return story.likes.includes(this.userId);
    }
}
