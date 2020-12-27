import { Injectable } from '@angular/core';
import {userMock} from '../common/testing/mocks/user.mock';

@Injectable({
  providedIn: 'root'
})
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


