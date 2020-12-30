import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { BaseAuthService} from '../auth/auth.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, BaseAuthService]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
