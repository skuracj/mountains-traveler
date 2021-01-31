import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Story} from '../../common/models/story';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export abstract class BaseStoriesService {
    private _stories: BehaviorSubject<Story[]>;

    public readonly stories$: Observable<Story[]>;

    abstract getStories();

    abstract getStoriesByUserId(usersId: string): Observable<Story[]> ;

    abstract getStoriesByUsersIds(usersIds?: string[]);

    abstract removeStory(storyId: string): void;

    abstract toggleLike(relationId: string, userId: string): void;

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
            this._stories.next(stories);
        } catch (e) {
            console.error(e);
        }
        return stories;
    }

     getStoriesByUserId(userId: string): Observable<Story[]> {
        let stories: Observable<Story[]>;
        try {
            stories = this.httpClient.get<Story[]>(`${environment.baseUrl}/dev/stories/user/${userId}`);
        } catch (e) {
            console.error(e);
        }
        return stories;
    }

    getStoriesByUsersIds(usersIds?: string[]): Observable<Story[]> {
        let stories: Observable<Story[]>;
        try {
            stories = this.httpClient.get<Story[]>(`${environment.baseUrl}/dev/stories/users/${usersIds}`);
        } catch (e) {
            console.error(e);
        }
        return stories;
    }

    async removeStory(storyId: string): Promise<void> {
        let stories;
        try {
            stories = await this.httpClient.delete<Story[]>(`${environment.baseUrl}/dev/stories/${storyId}`).toPromise();
        } catch (e) {
            console.error(e);
        }

        this._stories.next(stories);
    }

    async toggleLike(storyId: string, userId: string): Promise<void> {
        let stories;
        try {
            stories = await this.httpClient
                .patch<Story[]>(`${environment.baseUrl}/dev/stories/${storyId}`, {userId}).toPromise();
        } catch (e) {
            console.error(e);
        }
console.log(stories);
        this._stories.next([]);
    }
}
