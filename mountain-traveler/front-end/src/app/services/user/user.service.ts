import {Injectable} from '@angular/core';
import {User} from '../../common/models/user';
import {Observable} from 'rxjs';
import {MostActiveUser} from '../../common/models/most-active-user';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export abstract class BaseUserService {

    abstract getUserProfileById(userId: string): Observable<User>;

    abstract getUsersByIds(ids: string[]): Observable<User[]>;

    abstract getMostActiveUsers(ids?: string[]): Observable<MostActiveUser[]>;
}

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) {}

    getUserProfileById(userId: string): Observable<User> {
        let user: Observable<User>;
        try {
            user = this.httpClient.get<User>(`${environment.baseUrl}/dev/user/${userId}`);
        } catch (e) {
            console.error(e);
        }
        return user;
    }

    getUsersByIds(ids: string[]): Observable<User[]> {
        let users: Observable<User[]>;
        try {
            users = this.httpClient.get<User[]>(`${environment.baseUrl}/dev/users/${ids.toString()}`);
        } catch (e) {
            console.error(e);
        }
        return users;
    }

    getMostActiveUsers(ids?: string[]): Observable<MostActiveUser[]> {
        let users: Observable<MostActiveUser[]>;
        try {
            users = this.httpClient.get<MostActiveUser[]>(`${environment.baseUrl}/dev/users/most-active/${ids.toString()}`);
        } catch (e) {
            console.error(e);
        }
        return users;
    }
}
