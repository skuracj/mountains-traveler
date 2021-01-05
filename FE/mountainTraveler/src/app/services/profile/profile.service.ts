import {Injectable} from '@angular/core';
import {User} from '../../common/models/user';
import {userMock} from '../../common/testing/mocks/user.mock';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {PackingItem} from '../../common/models/packing-list';

export abstract class BaseProfileService {
    private _profile: BehaviorSubject<User>;
    public profile$: Observable<User>;

    abstract loadUserProfile();

    abstract updateUserPackingList(list: PackingItem[]);
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
        this._profile.next(userMock);
    }

    updateUserPackingList(list: PackingItem[]) {
        const updatedProfile = {...this._profile.getValue()};
        updatedProfile.packingList = list;
        this._profile.next(updatedProfile);
    }
}
