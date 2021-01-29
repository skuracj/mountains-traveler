import {Injectable} from '@angular/core';
import {User} from '../../common/models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {PackingItem} from '../../common/models/packing-list';
import {Story} from '../../common/models/story';
import {BaseAuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

export abstract class BaseProfileService {
    private _profile: BehaviorSubject<User>;
    public profile$: Observable<User>;

    private _stories: BehaviorSubject<Story[]>;
    public readonly stories$: Observable<Story[]>;

    abstract loadUserProfile();

    abstract updateUserProfile(profile: User);

    abstract updateUserPackingList(list: PackingItem[]);

    abstract getUserStories();

    abstract removeStory(id: string);
}


@Injectable()
export class ProfileService {
    private _profile: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public readonly profile$: Observable<User> = this._profile.asObservable();

    private _stories: BehaviorSubject<Story[]> = new BehaviorSubject<Story[]>(null);
    public readonly stories$: Observable<Story[]> = this._stories.asObservable();

    constructor(
        private authService: BaseAuthService,
        private httpClient: HttpClient) {
    }

    async loadUserProfile() {
        let user;

        try {
            user = await this.httpClient.get(`${environment.baseUrl}/dev/profile`).toPromise();
        } catch (e) {
            console.error(e);
        }
        // console.log(user);
        this._profile.next(user);
    }

    async updateUserProfile(profile: User) {
        const updatedProfile = {
            ...this._profile.getValue(),
            name: profile.name,
            location: profile.location,
            age: profile.age,
            isPublic: profile.isPublic,
            profilePicture: profile.profilePicture,
        };


        try {
            await this.httpClient.patch(`${environment.baseUrl}/dev/profile`, updatedProfile).toPromise();
            this._profile.next(updatedProfile);
        } catch (e) {
            console.error(e);
        }
    }

    async updateUserPackingList(list: PackingItem[]) {
        const updatedProfile = {...this._profile.getValue()};
        updatedProfile.packingList = list;

        await this.updateUserProfile(updatedProfile);
    }

    async getUserStories() {
        const userId = this.authService.getUserId();
        let stories: Story[];

        try {
            stories = await this.httpClient.get<Story[]>(`${environment.baseUrl}/dev/stories/user/${userId}`).toPromise();
            this._stories.next(stories);
        } catch (e) {
            console.error(e);
        }
    }

    async removeStory(id: string) {
        const userStories = [...this._stories.getValue()];
        // console.log(userStories.map(val => console.log(val.storyId)))

        const updatedStories = userStories.filter(story => story.storyId !== id);
        try {
            await this.httpClient.delete(`${environment.baseUrl}/dev/stories/${id}`).toPromise();
            this._stories.next(updatedStories);
        } catch (e) {
            console.error(e);

        }

        const userProfile: User = {...this._profile.getValue()};
        const updatedProfile: User = {
            ...userProfile,
            stories: userProfile.stories.filter(storyId => storyId !== id),
        };

        await this.updateUserProfile(updatedProfile);
    }
}
