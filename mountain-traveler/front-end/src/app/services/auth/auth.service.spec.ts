import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {usersMock} from '../../common/testing/mocks/users.mock';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService]
        });
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#isAuth', () => {
        it('should return boolean', () => {
            expect(service.isAuth()).toBeTruthy();
        });
    });

    describe('#getUserId', () => {
        it('should return userId', () => {
            expect(service.getUserId()).toEqual(usersMock[0].userId);
        });
    });
});
