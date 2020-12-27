import {Injectable} from '@angular/core';
import {UserStory} from '../common/models/story';
import {usersStoriesMock} from '../common/testing/mocks/users-stories.mock';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StoriesService {
    stories: UserStory[];

    constructor() {
    }

    getStories(usersIds?: string[]): Observable<UserStory[]> {
        this.stories = usersStoriesMock
            .filter(story => usersIds.includes(story.userId));

        return of(this.stories);
    }

    addLikeToStory(relationId: string, userId: string): void {
        this.stories
            .find(story => story.details.storyId === relationId)
            .details.likes.push(userId);
    }

    removeLikeFromStory(relationId: string, userId: string): void {
        const storyIndex = this.stories
            .findIndex(story => story.details.storyId === relationId);
        const likeIndex = this.stories[storyIndex].details.likes.findIndex(like => like === userId);

        this.stories[storyIndex].details.likes.splice(likeIndex, 1);
    }
}
