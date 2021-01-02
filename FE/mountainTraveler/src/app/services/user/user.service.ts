import {Injectable} from '@angular/core';
import {AuthService, BaseAuthService} from '../auth/auth.service';
import {User} from '../../common/models/user';
import {userMock} from '../../common/testing/mocks/user.mock';
import {usersMock} from '../../common/testing/mocks/users';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MostActiveUsers} from '../../common/models/most-active-users';
import {mostActiveUsersMock} from '../../common/testing/mocks/most-active-users';
import {PackingItem} from '../../common/models/packing-list';

export abstract class BaseUserService {
    private _user: BehaviorSubject<User>;
    public user$: Observable<User>;

    abstract loadUserData();

    abstract getUserProfileById(userId: string): Observable<User>;

    abstract getUsersByIds(ids: string[]): Observable<User[]>;

    abstract getMostActiveUsers(ids?: string[]): Observable<User[]>;

    abstract updateUserPackingList(list: PackingItem[]);

    abstract getUserPackingList(): Observable<PackingItem[]>;
}


@Injectable()
export class UserService {
    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    public readonly user$: Observable<User> = this._user.asObservable();

    constructor() {
        this.loadUserData();
    }

    loadUserData() {
        this._user  .next(userMock);
    }


    getUserProfileById(userId: string): Observable<User> {
        // TODO: Change logic according to response from BE (array / single object)
        return of(usersMock.filter(user => user.userId === userId)[0]);
    }

    getUsersByIds(ids: string[]): Observable<User[]> {
        return of(usersMock.filter(user => ids.includes(user.userId)));
    }

    getMostActiveUsers(ids?: string[]): Observable<MostActiveUsers[]> {
        return of(mostActiveUsersMock);
    }

    updateUserPackingList(list: PackingItem[]) {
        const updatedUser = {...this._user.getValue()};
        updatedUser.packingList = list;
        this._user.next(updatedUser);
    }
}
