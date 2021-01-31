import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {FriendsListComponent} from './friends-list.component';
import {BaseUserService} from '../../services/user/user.service';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {of} from 'rxjs';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('FriendsListComponent', () => {
    let component: FriendsListComponent;
    let fixture: ComponentFixture<FriendsListComponent>;
    let userServiceSpy;

    beforeEach(async(() => {
        userServiceSpy = jasmine.createSpyObj('BaseUserService', ['getUsersByIds']);
        TestBed.configureTestingModule({
            declarations: [FriendsListComponent],
            imports: [IonicModule.forRoot()],
            providers: [{provide: BaseUserService, useValue: userServiceSpy}],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(FriendsListComponent);
        component = fixture.componentInstance;
        userServiceSpy.getUsersByIds.and.returnValue(of(usersMock[1]));
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
