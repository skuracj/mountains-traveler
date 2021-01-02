import {Injectable} from '@angular/core';
import {UserStory} from '../../common/models/story';
import {usersStoriesMock} from '../../common/testing/mocks/users-stories.mock';
import {Observable, of} from 'rxjs';
import {userMock} from '../../common/testing/mocks/user.mock';


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

    addLikeToStory(storyId: string, userId: string): void {
        this.stories
            .find(story => story.details.storyId === storyId)
            .details.likes.push(userId);
    }

    removeLikeFromStory(storyId: string, userId: string): void {
        const storyIndex = this.stories
            .findIndex(story => story.details.storyId === storyId);
        const likeIndex = this.stories[storyIndex].details.likes.findIndex(like => like === userId);

        this.stories[storyIndex].details.likes.splice(likeIndex, 1);
    }
}


// import {Injectable} from '@angular/core';
// import {UserStory} from '../../common/models/story';
// import {usersStoriesMock} from '../../common/testing/mocks/users-stories.mock';
// import {BehaviorSubject, Observable, of} from 'rxjs';
// import {userMock} from '../../common/testing/mocks/user.mock';
//
//
// export abstract class BaseStoriesService {
//     private _stories: BehaviorSubject<UserStory[]>;
//
//     public stories$: Observable<UserStory[]>;
//
//     abstract getStories(usersIds?: string[]): Observable<UserStory[]>;
//
//     abstract removeStory(storyId: string): void;
//
//     abstract addLikeToStory(relationId: string, userId: string): void;
//
//     abstract removeLikeFromStory(relationId: string, userId: string): void;
// }
//
// @Injectable()
// export class StoriesService {
//     private _stories: BehaviorSubject<UserStory[]> = new BehaviorSubject<UserStory[]>(null);
//     public stories$: Observable<UserStory[]> = this._stories.asObservable();
//
//     stories: UserStory[];
//
//     constructor() {
//     }
//
//     getStories(usersIds?: string[]) {
//         const response = usersStoriesMock;
//         let stories = [];
//
//         if (usersIds) {
//             stories = response.filter(story => usersIds.includes(story.userId));
//         }
//
//         this._stories.next(stories);
//     }
//
//     removeStory(storyId: string): void {
//         // TODO Remove story by user ID and storyId
//         const userStoryIndex = userMock.stories.findIndex(story => story.storyId === storyId);
//         userMock.stories.splice(userStoryIndex, 1);
//     }
//
//     addLikeToStory(storyId: string, userId: string): void {
//         this.stories
//             .find(story => story.details.storyId === storyId)
//             .details.likes.push(userId);
//     }
//
//     removeLikeFromStory(storyId: string, userId: string): void {
//         const storyIndex = this.stories
//             .findIndex(story => story.details.storyId === storyId);
//         const likeIndex = this.stories[storyIndex].details.likes.findIndex(like => like === userId);
//
//         this.stories[storyIndex].details.likes.splice(likeIndex, 1);
//     }
// }
