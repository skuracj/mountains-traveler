import {Injectable} from '@angular/core';
import {User} from '../../common/models/user';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MostActiveUsers} from '../../common/models/most-active-users';
import {mostActiveUsersMock} from '../../common/testing/mocks/most-active-users';

export abstract class BaseUserService {
    private _user: BehaviorSubject<User>;
    public user$: Observable<User>;

    private _users: BehaviorSubject<User[]>;
    public users$: Observable<User[]>;

    private _mostActiveUsers: BehaviorSubject<MostActiveUsers[]>;
    public mostActiveUsers$: Observable<MostActiveUsers[]>;

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

    constructor() {}

    getUserProfileById(userId: string) {

        const profile = usersMock.find(user => user.userId === userId);
        console.log(profile);
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
