import {Injectable} from '@angular/core';
import {UserStory} from '../common/models/story';
import {usersStoriesMock} from '../common/testing/mocks/users-stories.mock';
import {Observable, of} from 'rxjs';
import {userMock} from '../common/testing/mocks/user.mock';


export abstract class BaseStoriesService {
    abstract getStories(usersIds?: string[]): Observable<UserStory[]>;

    abstract removeStory(storyId: string): void;

    abstract addLikeToStory(relationId: string, userId: string): void;

    abstract removeLikeFromStory(relationId: string, userId: string): void;
}

@Injectable()
export class StoriesService {
    stories: UserStory[];
 
    constructor() {
    }

    getStories(usersIds?: string[]): Observable<UserStory[]> {
        this.stories = usersStoriesMock
            .filter(story => usersIds.includes(story.userId));

        return of(this.stories);
    }

    removeStory(storyId: string): void {
        // TODO Remove story by user ID and storyId
        const userStoryIndex = userMock.stories.findIndex(story => story.storyId === storyId);
        userMock.stories.splice(userStoryIndex, 1);
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
