import {Injectable} from '@angular/core';
import {User} from '../../common/models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {PackingItem} from '../../common/models/packing-list';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {Story} from '../../common/models/story';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {BaseAuthService} from '../auth/auth.service';

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

    private userId: string;

    constructor(private authService: BaseAuthService) {
        this.loadUserData();
        this.getUserStories();
    }

    loadUserData() {
        console.log('User profile loaded');
        this._profile.next(usersMock[0]);
    }

    updateUserProfile(profile: User) {
        const updatedProfile = {
            ...this._profile.getValue(),
            name: profile.name,
            location: profile.location,
            age: profile.age,
            isPublic: profile.isPublic,
            profilePicture: profile.profilePicture
        };
        this._profile.next(updatedProfile);
    }

    updateUserPackingList(list: PackingItem[]) {
        const updatedProfile = {...this._profile.getValue()};
        updatedProfile.packingList = list;
        this._profile.next(updatedProfile);
    }

    getUserStories() {
        this.userId = this.authService.getUserId();
        this._stories.next(storiesMock.filter(story => story.userId === this.userId));
    }

    removeStory(id: string) {
        const userStories = this._stories.getValue();
        const updatedStories = userStories.filter(story => story.storyId !== id);
        const userProfile = this._profile.getValue();
        this._profile.next({
            ...this._profile.getValue(),
            stories: userProfile.stories.filter(storyId => storyId !== id)
        });
        this._stories.next(updatedStories);
    }
}
