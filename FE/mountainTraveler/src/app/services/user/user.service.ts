import {Injectable} from '@angular/core';
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

    private _users: BehaviorSubject<User[]>;
    public users$: Observable<User[]>;

    private _mostActiveUsers: BehaviorSubject<MostActiveUsers[]>;
    public mostActiveUsers$: Observable<MostActiveUsers[]>;

    abstract loadUserData();

    abstract updateUserPackingList(list: PackingItem[]);

    abstract getUserProfileById(userId: string);

    abstract getUsersByIds(ids: string[]);

    abstract getMostActiveUsers(ids?: string[]);
}


@Injectable()
export class UserService {
    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public readonly user$: Observable<User> = this._user.asObservable();

    private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(null);
    public readonly users$: Observable<User[]> = this._users.asObservable();

    private _mostActiveUsers: BehaviorSubject<MostActiveUsers[]> = new BehaviorSubject<MostActiveUsers[]>(null);
    public readonly mostActiveUsers$: Observable<MostActiveUsers[]> = this._mostActiveUsers.asObservable();

    constructor() {
        this.loadUserData();
    }

    loadUserData() {
        console.log('new data loaded');
        this._user.next(userMock);
    }

    updateUserPackingList(list: PackingItem[]) {
        const updatedUser = {...this._user.getValue()};
        updatedUser.packingList = list;
        this._user.next(updatedUser);
    }

    getUserProfileById(userId: string) {
        const profile = usersMock.find(user => user.userId === userId);
        this._user.next(profile);
    }

    getUsersByIds(ids: string[]) {
        const users = usersMock.filter(user => ids.includes(user.userId));
        this._users.next(users);
    }

    getMostActiveUsers(ids?: string[]) {
        this._mostActiveUsers.next(mostActiveUsersMock);
    }
}
