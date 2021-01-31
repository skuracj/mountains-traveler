import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {UserService} from './user.service';
import {BaseAuthService} from '../auth/auth.service';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {mostActiveUsersMock} from '../../common/testing/mocks/most-active-users';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';

describe('UserService', () => {
    let service: UserService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService, BaseAuthService],
        });
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(UserService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getUserProfileById', () => {
        let req: TestRequest;
        const id = 'id1';
        const endpointUrl = `${environment.baseUrl}/dev/user/${id}`;
        const userMockRes = usersMock[0];
        let retrievedUsers;

        beforeEach(() => {
            service.getUserProfileById(id).subscribe(val => retrievedUsers = val);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });

        it('should return mostActiveUsers', fakeAsync(() => {
            req.flush(userMockRes);
            tick(100);

            expect(retrievedUsers).toEqual(userMockRes);
        }));
    });

    describe('getUsersByIds', () => {
        let req: TestRequest;
        const ids = ['id1', 'id2'];
        const endpointUrl = `${environment.baseUrl}/dev/users/${ids.toString()}`;
        const usersMockRes = usersMock;
        let retrievedUsers;

        beforeEach(() => {
            service.getUsersByIds(ids).subscribe(val => retrievedUsers = val);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });

        it('should return users', fakeAsync(() => {
            req.flush(usersMockRes);
            tick(100);

            expect(retrievedUsers).toEqual(usersMockRes);
        }));
    });

    describe('getMostActiveUsersByIds', () => {
        let req: TestRequest;
        const ids = ['id1', 'id2'];
        const endpointUrl = `${environment.baseUrl}/dev/users/most-active/${ids.toString()}`;
        const mostActiveUsers = mostActiveUsersMock;
        let retrievedUsers;

        beforeEach(() => {
            service.getMostActiveUsersByIds(ids).subscribe(val => retrievedUsers = val);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });

        it('should return mostActiveUsers', fakeAsync(() => {
            req.flush(mostActiveUsers);
            tick(100);

            expect(retrievedUsers).toEqual(mostActiveUsers);
        }));
    });

    describe('getMostActiveUsers', () => {
        let req: TestRequest;
        const endpointUrl = `${environment.baseUrl}/dev/users/most-active`;
        const mostActiveUsers = mostActiveUsersMock;
        let retrievedUsers;

        beforeEach(() => {
            service.getMostActiveUsers().subscribe(val => retrievedUsers = val);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });

        it('should return mostActiveUsers', fakeAsync(() => {
            req.flush(mostActiveUsers);
            tick(100);

            expect(retrievedUsers).toEqual(mostActiveUsers);
        }));
    });


});
