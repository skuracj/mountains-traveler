import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PeoplePage} from './people.page';
import {Storage} from '@ionic/storage';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {TimeLineComponent} from '../../components/time-line/time-line.component';
import {MostActiveUsersComponent} from '../../components/most-active-users/most-active-users.component';
import {FriendsListComponent} from '../../components/friends-list/friends-list.component';
import {UserDetailsComponent} from '../../components/user-details/user-details.component';
import {HeaderComponent} from '../../components/header/header.component';

describe('People', () => {
    let component: PeoplePage;
    let fixture: ComponentFixture<PeoplePage>;
    let storageSpy;
    let userDetailsComponent: UserDetailsComponent;

    beforeEach(async(() => {
        storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);

        TestBed.configureTestingModule({
            declarations: [PeoplePage, TimeLineComponent, MostActiveUsersComponent, FriendsListComponent, UserDetailsComponent, HeaderComponent],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            providers: [{provide: Storage, useValue: storageSpy}]
        }).compileComponents();

        fixture = TestBed.createComponent(PeoplePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When segment clicked', () => {
        it('should set selectedSection to the value of clicked segment', () => {
            const testedSection = 'friends';
            const buttonId = fixture.debugElement.query(By.css(`[id="${testedSection}"]`));

            buttonId.nativeElement.click();

            expect(component.selectedSection).toEqual(testedSection);
        });
    });

    describe('UserDetailsComponent when setting button clicked', () => {
        let settingsButton;
        beforeEach(() => {

            fixture.detectChanges();

            const userDetails = fixture.debugElement.query(By.directive(UserDetailsComponent));
            userDetailsComponent = userDetails.componentInstance;

            settingsButton = userDetails.query(By.css('[id="settings-button"]'));
        });

        it('should open settings modal', () => {
            spyOn(component, 'openSettingsModal');
            settingsButton.nativeElement.click();

            expect(component.openSettingsModal).toHaveBeenCalled();
        });
    });
});

