import {Component, Input, OnInit} from '@angular/core';
import {UserStory} from '../../common/models/story';
import {BaseStoriesService, StoriesService} from '../../services/stories/stories.service';
import {Observable} from 'rxjs';
import {MostActiveUsers} from '../../common/models/most-active-users';

@Component({
    selector: 'app-time-line',
    templateUrl: './time-line.component.html',
    styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit{
    @Input() usersIds: string[] = [];
    @Input() userId?: string;
    stories$: Observable<UserStory[]>;


    constructor(private storiesService: BaseStoriesService) {
    }

    ngOnInit() {
        this.getUsersStories();
        this.stories$ = this.storiesService.stories$;
    }

    getUsersStories(){
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
        console.log(story);
        console.log(this.userId);
        // console.log(story.details.likes.includes(this.userId));
        return story.details.likes.includes(this.userId);
    }
}
