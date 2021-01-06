import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Story} from '../../common/models/story';
import {storiesMock} from '../../common/testing/mocks/stories.mock';

export abstract class BaseStoriesService {
    private _stories: BehaviorSubject<Story[]>;

    public readonly stories$: Observable<Story[]>;

    abstract getStories();

    abstract getStoriesByUserIds(usersIds?: string[]);

    abstract removeStory(storyId: string): void;

    abstract addLikeToStory(relationId: string, userId: string): void;

    abstract removeLikeFromStory(relationId: string, userId: string): void;
}

@Injectable()
export class StoriesService {
    private _stories: BehaviorSubject<Story[]> = new BehaviorSubject<Story[]>(null);

    public readonly stories$: Observable<Story[]> = this._stories.asObservable();

    constructor() {
    }

    getStories() {
        this._stories.next(storiesMock);
    }

    getStoriesByUserIds(usersIds?: string[]) {
        const filteredStories = storiesMock.filter(story => usersIds.includes(story.userId));
        this._stories.next(filteredStories);
    }

    removeStory(storyId: string): void {
        // const stories: Story[] = [...this._stories.getValue()];
        // const userStoryIndex = stories.findIndex(story => story.details.storyId === storyId);
        //
        // this._stories.next(stories.splice(userStoryIndex, 1));
    }

    addLikeToStory(storyId: string, userId: string): void {
        // const stories: Story[] = [...this._stories.getValue()];
        //
        // stories.find(story => story.details.storyId === storyId)
        //     .details.likes.push(userId);
        // this._stories.next(stories);
    }

    removeLikeFromStory(storyId: string, userId: string): void {
        // const stories: Story[] = [...this._stories.getValue()];
        // const storyIndex = stories.findIndex(story => story.details.storyId === storyId);
        // const likeIndex = stories[storyIndex].details.likes.findIndex(like => like === userId);
        //
        // stories[storyIndex].details.likes.splice(likeIndex, 1);
        //
        // this._stories.next(stories);
    }
}