// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {IonicModule, ModalController} from '@ionic/angular';
//
// import {PeoplePage} from './people.page';
// import {Storage} from '@ionic/storage';
// import {By} from '@angular/platform-browser';
// import {RouterTestingModule} from '@angular/router/testing';
// import {UserDetailsComponent} from '../../components/user-details/user-details.component';
//
// import {NO_ERRORS_SCHEMA} from '@angular/core';
// import {BaseUserService} from '../../services/user/user.service';
// import {of} from 'rxjs';
// import {mostActiveUsersMock} from '../../common/testing/mocks/most-active-users';
// import {storiesMock} from '../../common/testing/mocks/stories.mock';
// import {usersMock} from '../../common/testing/mocks/users.mock';
// import {BaseStoriesService} from '../../services/stories/stories.service';
// import {BaseProfileService} from '../../services/profile/profile.service';
// import {Sections} from '../../common/constants/Sections.enum';
//
// describe('People', () => {
//     let component: PeoplePage;
//     let fixture: ComponentFixture<PeoplePage>;
//     let storageSpy;
//     let userDetailsComponent: UserDetailsComponent;
//     let modalControllerSpy;
//     let modalSpy;
//     let userServiceSpy;
//     let storiesServiceSpy;
//     let profileServiceSpy;
//
//     beforeEach(async(() => {
//         storageSpy = jasmine.createSpyObj('Storage', ['get', 'set']);
//         modalControllerSpy = jasmine.createSpyObj('ModalController', ['create']);
//         modalSpy = jasmine.createSpyObj('HTMLIonModalElement', ['present']);
//
//         userServiceSpy = jasmine.createSpyObj('BaseUserService', ['getMostActiveUsers', 'getUsersByIds']);
//         storiesServiceSpy = jasmine.createSpyObj('BaseStoriesService', ['getStoriesByUserIds']);
//         profileServiceSpy = jasmine.createSpyObj('BaseProfileService', ['getUserStories']);
//
//         TestBed.configureTestingModule({
//             declarations: [
//                 PeoplePage,
//                 UserDetailsComponent
//             ],
//             imports: [IonicModule.forRoot(), RouterTestingModule],
//             providers: [
//                 {provide: BaseUserService, useValue: userServiceSpy},
//                 {provide: BaseStoriesService, useValue: storiesServiceSpy},
//                 {provide: BaseProfileService, useValue: profileServiceSpy},
//                 {provide: Storage, useValue: storageSpy},
//                 {provide: ModalController, useValue: modalControllerSpy}],
//             schemas: [NO_ERRORS_SCHEMA]
//         }).compileComponents();
//
//         userServiceSpy.getMostActiveUsers.and.stub();
//         userServiceSpy.getUsersByIds.and.stub();
//         userServiceSpy.mostActiveUsers$ = of(mostActiveUsersMock);
//
//         storiesServiceSpy.getStoriesByUserIds.and.stub();
//         storiesServiceSpy.stories$ = of(storiesMock);
//
//         profileServiceSpy.getUserStories.and.stub();
//         profileServiceSpy.profile$ = of(usersMock[0]);
//
//
//         fixture = TestBed.createComponent(PeoplePage);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//
//         modalControllerSpy.create.and.callFake(() => Promise.resolve(modalSpy));
//     }));
//
//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
//
//     describe('When page entered', () => {
//         it(`Should set selectedSession to ${Sections.me} when selectedSession is falsy`, () => {
//             component.selectedSection = undefined;
//
//             component.ngOnInit();
//
//             expect(component.selectedSection).toEqual(Sections.me);
//         });
//
//         it(`Should NOT change selectedSession to ${Sections.me} when selectedSession has value`, () => {
//             component.selectedSection = Sections.friends;
//
//             component.ngOnInit();
//
//             expect(component.selectedSection).toEqual(Sections.friends);
//         });
//
//         describe(`when ${Sections.me} selected`, () => {
//             beforeEach(async () => {
//                 await fixture.whenRenderingDone();
//             });
//             it('should subscribe to profileService.profile$ observable and assign value to profile', () => {
//                 expect(component.profile).toEqual(usersMock[0]);
//             });
//
//             it('should fetch userStories', () => {
//                 expect(profileServiceSpy.getUserStories).toHaveBeenCalled();
//                 expect(component.userStories$).toEqual(profileServiceSpy.stories$);
//             });
//
//             it('should fetch friends', () => {
//                 expect(userServiceSpy.getUsersByIds).toHaveBeenCalledWith(component.profile.friendsIds);
//                 expect(component.friends$).toEqual(userServiceSpy.user$);
//             });
//         });
//
//         describe(`when ${Sections.friends} session clicked`, () => {
//             beforeEach(async () => {
//                 spyOn(component, 'mostActiveFriends').and.callThrough();
//                 spyOn(component, 'friendsStories').and.callThrough();
//                 const testedSection = 'friends';
//                 const buttonId = fixture.debugElement.query(By.css(`[id="${testedSection}"]`));
//
//                 buttonId.nativeElement.click();
//                 fixture.detectChanges();
//             });
//
//             it('should subscribe and fetch mostActiveUsers', () => {
//                 expect(component.mostActiveFriends).toHaveBeenCalled();
//                 expect(userServiceSpy.getMostActiveUsers).toHaveBeenCalledWith(component.profile.friendsIds);
//                 expect(component.mostActiveFriends()).toEqual(userServiceSpy.mostActiveUsers$);
//             });
//
//             it('should subscribe and fetch friendsStories', async () => {
//                 expect(storiesServiceSpy.getStoriesByUserIds).toHaveBeenCalledWith(component.profile.friendsIds);
//                 expect(component.friendsStories()).toEqual(storiesServiceSpy.stories$);
//             });
//         });
//     });
//
//     describe('When page left', () => {
//         it('should unsubscribe profileSubscription', () => {
//             spyOn(component.profileSubscription, 'unsubscribe');
//
//             component.ionViewWillLeave();
//
//             expect(component.profileSubscription.unsubscribe).toHaveBeenCalled();
//         });
//     });
//
//     describe('When onSegmentClicked', () => {
//         it('should set selectedSection to the value from', () => {
//             const testedSection = 'friends';
//             const buttonId = fixture.debugElement.query(By.css(`[id="${testedSection}"]`));
//
//             buttonId.nativeElement.click();
//
//             expect(component.selectedSection).toEqual(testedSection);
//         });
//     });
//
//     describe('UserDetailsComponent when settings button clicked', () => {
//         let settingsButton;
//         beforeEach(() => {
//
//             fixture.detectChanges();
//
//             const userDetails = fixture.debugElement.query(By.directive(UserDetailsComponent));
//             userDetailsComponent = userDetails.componentInstance;
//
//             settingsButton = userDetails.query(By.css('[id="settings-button"]'));
//         });
//
//         it('should open settings modal', () => {
//             spyOn(component, 'openSettingsModal');
//             settingsButton.nativeElement.click();
//
//             expect(component.openSettingsModal).toHaveBeenCalled();
//         });
//
//         it('Should present packing-list', async () => {
//             await component.openSettingsModal();
//
//             expect(modalSpy.present).toHaveBeenCalled();
//         });
//     });
// });
//
