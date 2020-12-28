import {Injectable} from '@angular/core';
import {userMock} from '../common/testing/mocks/user.mock';

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
        return userMock.userId;
    }
}


