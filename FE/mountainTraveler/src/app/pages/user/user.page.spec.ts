import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserPage} from './user.page';
import {RouterTestingModule} from '@angular/router/testing';
import {BaseUserService, UserService} from '../../services/user/user.service';
import {of} from 'rxjs';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {QueryParamName} from '../../common/constants/QueryParamNames.enum';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


describe('UserPage', () => {
    let component: UserPage;
    let fixture: ComponentFixture<UserPage>;
    let userServiceSpy;
    let storiesServiceSpy;
    let location: Location;
    let router: Router;


    beforeEach(async(() => {
        userServiceSpy = jasmine.createSpyObj(BaseUserService, ['getUserProfileById']);
        storiesServiceSpy = jasmine.createSpyObj(BaseStoriesService, ['getStoriesByUserIds']);
        TestBed.configureTestingModule({
            declarations: [UserPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            providers: [
                {provide: BaseUserService, useValue: userServiceSpy},
                {provide: BaseStoriesService, useValue: storiesServiceSpy}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        userServiceSpy.getUserProfileById.and.returnValue(of(usersMock[0]));

        storiesServiceSpy.getStoriesByUserIds.and.stub();
        storiesServiceSpy.stories$ = of(storiesMock);

        fixture = TestBed.createComponent(UserPage);
        component = fixture.componentInstance;
        location = TestBed.inject(Location);
        router = TestBed.inject(Router);

        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when page entered', () => {
        beforeEach(() => {
            spyOn(component, 'extractUserIdFromQueryParam').and.callThrough();
            spyOn(component, 'getUser').and.callThrough();
            spyOn(component, 'getUserStories').and.callThrough();
            component.ionViewWillEnter();
        });

        it('should call', () => {
            expect(component.extractUserIdFromQueryParam).toHaveBeenCalled();
            expect(component.getUser).toHaveBeenCalled();
            expect(component.getUserStories).toHaveBeenCalled();
        });

        it(`should extract queryParam ${QueryParamName.userId} and assign it to userId`, () => fixture.ngZone.run(async () => {
            const userId = 'someUserId';
            await router.navigate([], {queryParams: {[QueryParamName.userId]: userId}});

            component.ionViewWillEnter();
            await fixture.whenStable();

            expect(location.path()).toEqual(`/?${QueryParamName.userId}=${userId}`);
            expect(component.userId).toEqual(userId);
        }));

        describe('and app-time-line is rendered', () => {
            it('should call #getUserStories', () => {
                expect(component.getUserStories).toHaveBeenCalled();
            });

            it('should call  storiesServiceSpy#getStoriesByUserIds', () => {
                expect(storiesServiceSpy.getStoriesByUserIds).toHaveBeenCalledWith([component.userId]);
            });

            it('should assign userStories to storiesService.stories$;', () => {
                expect(component.userStories$).toEqual(storiesServiceSpy.stories$);
            });
        });

        describe('and app-user-details is rendered', () => {
            it('should call #getUser', () => {
                expect(component.getUser).toHaveBeenCalled();
            });

            it('should call  userService#getUserProfileById', () => {
                expect(storiesServiceSpy.getStoriesByUserIds).toHaveBeenCalledWith([component.userId]);
            });

            it('should assign user$ to userService.user$;', () => {
                expect(component.user$).toEqual(userServiceSpy.user$);
            });
        });
    });
});
