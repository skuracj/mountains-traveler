import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { UserService } from './user.service';
import { BaseAuthService} from '../auth/auth.service';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {User} from '../../common/models/user';
import {mostActiveUsersMock} from '../../common/testing/mocks/most-active-users';
import {MostActiveUser} from '../../common/models/most-active-user';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService, BaseAuthService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserProfileById', () => {
    it('should emit user profile with passed id', fakeAsync(() => {
      const userId = 'loggedInUser_ID';
      const expectedUser: User = usersMock.find(user => user.userId === userId);

      service.getUserProfileById('loggedInUser_ID');

      // service.user$.subscribe(user => {
      //   tick(100);
      //
      //   expect(user).toEqual(expectedUser);
      // });
    }));
  });

  describe('getUsersByIds', () => {
    it('should emit users profiles with passed ids', fakeAsync(() => {
      const usersIds = ['loggedInUser_ID', 'anulka1_ID'];
      const expectedUsers: User[] = usersMock.filter(user => usersIds.includes(user.userId));

      service.getUsersByIds(usersIds);
      //
      // service.users$.subscribe(users => {
      //   tick(100);
      //
      //   expect(users).toEqual(expectedUsers);
      // });
    }));
  });

  describe('getMostActiveUsers', () => {
    it('should emit mostActiveUsers profiles', fakeAsync(() => {
      const expectedUsers: MostActiveUser[] = mostActiveUsersMock;

      service.getMostActiveUsers();

      // service.mostActiveUsers$.subscribe(users => {
      //   tick(100);
      //
      //   expect(users).toEqual(expectedUsers);
      // });
    }));
  });
});
