import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FriendsListComponent} from './friends-list.component';
import {StoriesService} from '../../services/stories.service';
import {UserService} from '../../services/user.service';
import {usersMock} from '../../common/testing/mocks/users';
import {of} from 'rxjs';

describe('FriendsListComponent', () => {
    let component: FriendsListComponent;
    let fixture: ComponentFixture<FriendsListComponent>;
    let userServiceSpy;

    beforeEach(async(() => {
        userServiceSpy = jasmine.createSpyObj('UserService', ['getUsersByIds']);
        TestBed.configureTestingModule({
            declarations: [FriendsListComponent],
            imports: [IonicModule.forRoot()],
            providers: [{provide: UserService, useValue: userServiceSpy}]
        }).compileComponents();

        fixture = TestBed.createComponent(FriendsListComponent);
        component = fixture.componentInstance;
        userServiceSpy.getUsersByIds.and.returnValue(of(usersMock[1]));
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When component initialized', () => {
        describe('and friendsIds received', () => {
            const friendsIds = ['id1'];
            beforeEach(async () => {
                component.friendsIds = friendsIds;
            });
            it('should call getUserByIds', () => {

                component.ngOnInit();

                expect(userServiceSpy.getUsersByIds).toHaveBeenCalledWith(friendsIds);
            });
        });

        describe('and friendsIds NOT received', () => {
            const friendsIds = [];
            beforeEach(async () => {
                component.friendsIds = friendsIds;
            });
            it('should NOT call getUserByIds', () => {

                component.ngOnInit();

                expect(userServiceSpy.getUsersByIds).not.toHaveBeenCalledWith();
            });
        });
    });
});
