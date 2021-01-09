// import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// import {IonicModule} from '@ionic/angular';
//
// import {TimeLineComponent} from './time-line.component';
// import {BaseStoriesService} from '../../services/stories/stories.service';
// import {of} from 'rxjs';
// import {usersStoriesMock} from '../../common/testing/mocks/users-stories.mock';
// import {TimeAgoPipe} from 'time-ago-pipe';
// import {By} from '@angular/platform-browser';
//
// describe('TimeLineComponent', () => {
//     let component: TimeLineComponent;
//     let fixture: ComponentFixture<TimeLineComponent>;
//     let storiesServiceSpy;
//
//     beforeEach(async(() => {
//         storiesServiceSpy = jasmine.createSpyObj('BaseStoriesService', ['getStories', 'addLikeToStory', 'removeLikeFromStory']);
//         TestBed.configureTestingModule({
//             declarations: [TimeLineComponent, TimeAgoPipe],
//             imports: [IonicModule.forRoot()],
//             providers: [
//                 {provide: BaseStoriesService, useValue: storiesServiceSpy},
//             ]
//         }).compileComponents();
//
//         fixture = TestBed.createComponent(TimeLineComponent);
//         component = fixture.componentInstance;
//
//         storiesServiceSpy.getStories.and.returnValue(of(usersStoriesMock));
//         fixture.detectChanges();
//     }));
//
//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
//
//     describe('When component initialized', () => {
//         describe('and userIds NOT recevied', () => {
//             it('should not call getStories', async () => {
//                 component.usersIds = [];
//
//                 component.getUsersStories();
//
//                 expect(storiesServiceSpy.getStories).not.toHaveBeenCalled();
//             });
//         });
//         describe('and userIds received', () => {
//             beforeEach(() => {
//                 component.usersIds = ['id1', 'id2'];
//
//                 fixture.detectChanges();
//             });
//             it('should call getStories', () => {
//                 expect(storiesServiceSpy.getStories).toHaveBeenCalledWith(component.usersIds);
//             });
//             it('should receive userStories', () => {
//                 storiesServiceSpy.getStories().subscribe(result => expect(result).toEqual(usersStoriesMock));
//             });
//         });
//         describe('and rendering done', () => {
//             describe('when story liked', () => {
//                 let likeButton;
//                 const indexOfElementFromArray = 1;
//                 const userId = 'testUserId';
//                 beforeEach(async () => {
//                     component.usersIds = ['id1', 'id2'];
//                     component.userId = userId;
//                     spyOn(component, 'checkIfLiked').and.returnValue(true);
//                     spyOn(component, 'removeLike').and.callThrough();
//                     fixture.detectChanges();
//                     await fixture.whenRenderingDone();
//                     likeButton = fixture.debugElement.queryAll(By.css(`[id='like-button']`))[indexOfElementFromArray];
//                 });
//                 it('should display heart if story liked by user', () => {
//
//                     expect(likeButton.attributes['ng-reflect-name']).toEqual('heart');
//                 });
//                 it('should call removeLike when likeButton clicked', () => {
//                     likeButton.nativeElement.click();
//
//                     expect(component.removeLike).toHaveBeenCalled();
//                     expect(storiesServiceSpy.removeLikeFromStory).toHaveBeenCalledWith(usersStoriesMock[indexOfElementFromArray].details.storyId, userId);
//                 });
//             });
//             describe('when story NOT liked', () => {
//                 let likeButton;
//                 const indexOfElementFromArray = 1;
//                 const userId = 'testUserId';
//                 beforeEach(async () => {
//                     component.usersIds = ['id1', 'id2'];
//                     component.userId = userId;
//                     spyOn(component, 'checkIfLiked').and.returnValue(false);
//                     spyOn(component, 'addLike').and.callThrough();
//
//                     fixture.detectChanges();
//                     await fixture.whenRenderingDone();
//                     likeButton = fixture.debugElement.queryAll(By.css(`[id='like-button']`))[indexOfElementFromArray];
//                 });
//                 it('should display heart if story liked by user', () => {
//
//                     expect(likeButton.attributes['ng-reflect-name']).toEqual('heart-outline');
//                 });
//                 it('should call addLike when likeButton clicked', () => {
//                     likeButton.nativeElement.click();
//
//                     expect(component.addLike).toHaveBeenCalled();
//                     expect(storiesServiceSpy.addLikeToStory).toHaveBeenCalledWith(usersStoriesMock[indexOfElementFromArray].details.storyId, userId);
//                 });
//             });
//         });
//
//
//     });
// });
