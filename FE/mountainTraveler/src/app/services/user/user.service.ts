import {Injectable} from '@angular/core';
import {AuthService, BaseAuthService} from '../auth/auth.service';
import {User} from '../../common/models/user';
import {userMock} from '../../common/testing/mocks/user.mock';
import {usersMock} from '../../common/testing/mocks/users';
import {Observable, of} from 'rxjs';

export abstract class BaseUserService {
    abstract getCurrentUserProfile(): User;

    abstract getUserProfileById(userId: string): Observable<User>;

    abstract getUsersByIds(ids: string[]): Observable<User[]>;
}


@Injectable()
export class UserService {

    constructor(private authService: BaseAuthService) {
    }

    getCurrentUserProfile(): User {
        this.authService.getUserId();
        return userMock;
    }

    getUserProfileById(userId: string): Observable<User> {
        // TODO: Change logic according to response from BE (array / single object)
        return of(usersMock.filter(user => user.userId === userId)[0]);
    }

    getUsersByIds(ids: string[]): Observable<User[]> {
        console.log(usersMock.filter( user1 => ids.includes(user1.userId)));
        return of(usersMock.filter( user1 => ids.includes(user1.userId)));

    }
}
