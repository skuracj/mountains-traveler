import {Injectable} from '@angular/core';
import {UserStory} from '../../common/models/story';
import {usersStoriesMock} from '../../common/testing/mocks/users-stories.mock';
import {BehaviorSubject, Observable} from 'rxjs';

export abstract class BaseStoriesService {
    private _stories: BehaviorSubject<UserStory[]>;

    public readonly stories$: Observable<UserStory[]>;

    abstract getStories();

    abstract getStoriesByUserIds(usersIds?: string[]);

    abstract removeStory(storyId: string): void;

    abstract addLikeToStory(relationId: string, userId: string): void;

    abstract removeLikeFromStory(relationId: string, userId: string): void;
}

@Injectable()
export class StoriesService {
    private _stories: BehaviorSubject<UserStory[]> = new BehaviorSubject<UserStory[]>(null);

    public readonly stories$: Observable<UserStory[]> = this._stories.asObservable();

    constructor() {
    }

    getStories() {
        this._stories.next(usersStoriesMock);
    }

    getStoriesByUserIds(usersIds?: string[]) {
        const filteredStories = usersStoriesMock.filter(story => usersIds.includes(story.userId));
        this._stories.next(filteredStories);
    }

    removeStory(storyId: string): void {
        const stories: UserStory[] = [...this._stories.getValue()];
        const userStoryIndex = stories.findIndex(story => story.details.storyId === storyId);

        this._stories.next(stories.splice(userStoryIndex, 1));
    }

    addLikeToStory(storyId: string, userId: string): void {
        const stories: UserStory[] = [...this._stories.getValue()];

        stories.find(story => story.details.storyId === storyId)
            .details.likes.push(userId);
        this._stories.next(stories);
    }

    removeLikeFromStory(storyId: string, userId: string): void {
        const stories: UserStory[] = [...this._stories.getValue()];
        const storyIndex = stories.findIndex(story => story.details.storyId === storyId);
        const likeIndex = stories[storyIndex].details.likes.findIndex(like => like === userId);

        stories[storyIndex].details.likes.splice(likeIndex, 1);

        this._stories.next(stories);
    }
}