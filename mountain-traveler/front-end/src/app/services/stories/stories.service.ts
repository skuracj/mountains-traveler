import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Story} from '../../common/models/story';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {strict} from 'assert';

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

    constructor(private httpClient: HttpClient) {
    }

    async getStories() {
        let stories: Story[];
        try {
            stories = await this.httpClient.get<Story[]>(`${environment.baseUrl}/dev/stories`).toPromise();
        } catch (e) {
            console.error(e);
        }
        this._stories.next(stories);
    }

    async getStoriesByUserIds(usersIds?: string[]) {
        // const filteredStories = storiesMock.filter(story => usersIds.includes(story.userId));
        let stories: Story[];
        try {
            stories = await this.httpClient.get<Story[]>(`${environment.baseUrl}/dev/stories/user/${usersIds}`).toPromise();
        } catch (e) {
            console.error(e);
        }
        this._stories.next(stories);
    }

    async removeStory(storyId: string): Promise<void> {
        // const stories: Story[] = this._stories.getValue();
        // const updatedStories = stories.filter(story => story.storyId !== storyId);
        let stories;
        try {
            stories = await this.httpClient.delete<Story[]>(`${environment.baseUrl}/dev/stories/${storyId}`).toPromise();
        } catch (e) {
            console.error(e);
        }

        this._stories.next(stories);
    }

    async addLikeToStory(storyId: string, userId: string): Promise<void> {
        // const stories: Story[] = [...this._stories.getValue()];
        //
        // stories.find(story => story.storyId === storyId)
        //     .likes.push(userId);

        let stories;
        try {
            stories = await this.httpClient
                .patch<Story[]>(`${environment.baseUrl}/dev/stories/${storyId}`, {likes: userId}).toPromise();
        } catch (e) {
            console.error(e);
        }

        this._stories.next(stories);
    }

    async removeLikeFromStory(storyId: string, userId: string): Promise<void> {

        // const storyIndex = stories.findIndex(story => story.storyId === storyId);
        // const likeIndex = stories[storyIndex].likes.findIndex(like => like === userId);
        //
        // stories[storyIndex].likes.splice(likeIndex, 1);


        try {
            await this.httpClient
                .patch<Story[]>(`${environment.baseUrl}/dev/stories/${storyId}`, {likes: userId}).toPromise();
        } catch (e) {
            console.error(e);
        }
        const stories: Story[] = [...this._stories.getValue()];
        stories.forEach(story => {
            if (story.storyId === storyId) {
                const likeIndex = story.likes.indexOf(userId);
                story.likes.splice(likeIndex, 1);
            }
        });

        this._stories.next(stories);
    }
}
