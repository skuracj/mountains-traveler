import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from '../common/models/user';
import {userMock} from '../common/testing/mocks/user.mock';
import {usersMock} from '../common/testing/mocks/users';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    // user: User;

    constructor(private authService: AuthService) {
    }

    getCurrentUserProfile(): User {
        this.authService.getUserId();
        return userMock;
    }

    getUserProfile(userId: string): Observable<User> {
        // TODO: Change logic according to response from BE (array / single object)
        return of(usersMock.filter(user => user.userId === userId)[0]);
    }

    getUsersByIds(ids: string[]): Observable<User[]> {
        console.log(usersMock.filter( user1 => ids.includes(user1.userId)));
        return of(usersMock.filter( user1 => ids.includes(user1.userId)));

    }
}
