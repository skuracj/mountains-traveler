import {Injectable} from '@angular/core';
import {usersMock} from '../../common/testing/mocks/users.mock';

export abstract class BaseAuthService {
    abstract isAuth(): boolean;

    abstract getUserId(): string;
}


@Injectable()
export class AuthService {

    constructor() {
    }

    isAuth(): boolean {
        return true;
    }

    getUserId(): string {
        return usersMock[0].userId;
    }
}


