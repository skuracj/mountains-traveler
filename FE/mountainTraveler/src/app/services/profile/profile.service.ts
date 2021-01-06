import {Injectable} from '@angular/core';
import {User} from '../../common/models/user';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PackingItem} from '../../common/models/packing-list';
import {usersMock} from '../../common/testing/mocks/users.mock';

export abstract class BaseProfileService {
    private _profile: BehaviorSubject<User>;
    public profile$: Observable<User>;

    abstract loadUserProfile();

    abstract updateUserProfile(profile: User);

    abstract updateUserPackingList(list: PackingItem[]);

    abstract removeStory(id: string);
}


@Injectable()
export class ProfileService {
    private _profile: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public readonly profile$: Observable<User> = this._profile.asObservable();

    constructor() {
        this.loadUserData();
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

    removeStory(id: string) {
        const userProfile = {...this._profile.getValue()};
        const updatedStories = userProfile.stories.filter(storyId => storyId === id);

        this._profile.next({...userProfile, stories: updatedStories});
    }
}
