import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {AuthService, BaseAuthService} from '../auth/auth.service';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {User} from '../../common/models/user';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {PackingItem} from '../../common/models/packing-list';

describe('ProfileService', () => {
    let service: ProfileService;
    let authServiceSpy;

    beforeEach(() => {
        authServiceSpy = jasmine.createSpyObj(BaseAuthService, ['getUserId']);

        TestBed.configureTestingModule({
            providers: [ProfileService,
                {provide: BaseAuthService, useValue: authServiceSpy}
            ]
        });

        service = TestBed.inject(ProfileService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('When service created', () => {
        let profileService: ProfileService;

        it('should call #loadUserData and #getUserStories in the constructor', () => {
            // const loadUserDataSpy = spyOn(ProfileService.prototype, 'loadUserData');
            const getUserStoriesSpy = spyOn(ProfileService.prototype, 'getUserStories');
            const authService = new AuthService();

            // profileService = new ProfileService(authService);

            // expect(loadUserDataSpy).toHaveBeenCalled();
            expect(getUserStoriesSpy).toHaveBeenCalled();
        });
    });

    describe('#loadUserData', () => {
        it('should emit user profile', fakeAsync(() => {
            // service.loadUserData();

            service.profile$.subscribe(profile => {
                tick(100);
                expect(profile).toEqual(usersMock[0]);
            });
        }));
    });

    describe('#getUserStories', () => {
        it('should emit user stories', fakeAsync(() => {
            const userId = 'loggedInUser_ID';
            authServiceSpy.getUserId.and.returnValue(userId);
            const expectedUserProfile = storiesMock.filter(story => story.userId === userId);

            service.getUserStories();

            service.stories$.subscribe(stories => {
                tick(100);
                console.log(stories);
                expect(stories).toEqual(expectedUserProfile);
            });
        }));
    });

    describe('#updateUserProfile', () => {
        it('should emit updated user profile', fakeAsync(() => {
            // @ts-ignore
            service._profile.next(usersMock[0]);
            const updatedProfile = {
                name: 'someName',
                location: 'profile.location',
                age: 'profile.age',
                isPublic: 'profile.isPublic',
                profilePicture: 'profile.profilePicture'
            } as unknown as User;
            const expectedUserProfile = {...usersMock[0], ...updatedProfile};

            service.updateUserProfile(updatedProfile);

            service.profile$.subscribe(profile => {
                tick(100);

                expect(profile).toEqual(expectedUserProfile);
            });
        }));
    });

    describe('#updateUserPackingList', () => {
        it('should emit user profile with updated packing list', fakeAsync(() => {
            // @ts-ignore
            service._profile.next(usersMock[0]);
            const list: PackingItem[] = [{
                title: 'item title',
                packed: true
            }];
            const expectedUserProfile = {...usersMock[0], packingList: list};

            service.updateUserPackingList(list);

            service.profile$.subscribe(profile => {
                tick(100);

                expect(profile).toEqual(expectedUserProfile);
            });
        }));
    });

    describe('#removeStory', () => {
        const storyIdToDelete = 'b07c3896-3b17-4689-86ef-4bc6ec25ef15';
        const userId = 'loggedInUser_ID';
        const userProfile = usersMock[0];

        it('should emit updated user profile', fakeAsync(() => {
            // @ts-ignore
            service._profile.next(userProfile);
            const expectedUserProfile = {
                ...userProfile,
                stories: userProfile.stories.filter(storyId => storyId !== storyIdToDelete)};

            service.removeStory(storyIdToDelete);

            service.profile$.subscribe(profile => {
                tick(100);

                expect(profile).toEqual(expectedUserProfile);
            });
        }));

        it('should emit updated stories', fakeAsync(() => {
            const userStories = storiesMock.filter(story => story.userId === userId);
            const expectedStories = userStories.filter(story => story.storyId !== storyIdToDelete);
            // @ts-ignore
            service._stories.next(userStories);

            service.removeStory(storyIdToDelete);

            service.stories$.subscribe(stories => {
                tick(100);

                expect(stories).toEqual(expectedStories);
            });
        }));
    });
});
