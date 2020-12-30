import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {UserPage} from './user.page';
import {RouterTestingModule} from '@angular/router/testing';
import {BaseUserService, UserService} from '../../services/user/user.service';
import {of} from 'rxjs';
import {usersMock} from '../../common/testing/mocks/users';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserPage', () => {
    let component: UserPage;
    let fixture: ComponentFixture<UserPage>;
    let userServiceSpy;

    beforeEach(async(() => {
        userServiceSpy = jasmine.createSpyObj('BaseUserService', ['getUserProfileById']);
        TestBed.configureTestingModule({
            declarations: [UserPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            providers: [{provide: BaseUserService, useValue: userServiceSpy}],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();

        userServiceSpy.getUserProfileById.and.returnValue(of(usersMock[0]));

        fixture = TestBed.createComponent(UserPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
