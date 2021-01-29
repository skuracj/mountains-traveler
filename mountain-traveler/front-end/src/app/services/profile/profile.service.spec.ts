import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {BaseAuthService} from '../auth/auth.service';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {User} from '../../common/models/user';
import {PackingItem} from '../../common/models/packing-list';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {Story} from '../../common/models/story';

describe('ProfileService', () => {
    let service: ProfileService;
    let authServiceSpy;
    // let storiesServiceSpy;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        authServiceSpy = jasmine.createSpyObj(BaseAuthService, ['getUserId']);

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProfileService,
                {provide: BaseAuthService, useValue: authServiceSpy},
            ],
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ProfileService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#loadUserData', () => {
        let req: TestRequest;
        const endpointUrl = `${environment.baseUrl}/dev/profile`;

        beforeEach(() => {
            service.loadUserProfile();
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
            expect(req.request.url).toEqual(endpointUrl);
        });

        it('should emit user profile', fakeAsync(() => {
            req.flush(usersMock[0]);
            tick(100);

            service.profile$.subscribe(profile => {
                expect(profile).toEqual(usersMock[0]);
            });
        }));
    });

    describe('#updateUserProfile', () => {
        let req: TestRequest;
        const endpointUrl = `${environment.baseUrl}/dev/profile`;
        const updatedProfile = {
            name: 'Albert Einstein',
            location: 'Amsterdam',
            age: 69,
            isPublic: true,
            profilePicture: 'someUrl',
        } as User;

        beforeEach(() => {
            service.updateUserProfile(updatedProfile);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('PATCH');
            expect(req.request.url).toEqual(endpointUrl);
            expect(req.request.body).toEqual(updatedProfile);
        });

        it('should emit updated user profile', fakeAsync(() => {
            req.flush(updatedProfile);
            tick(100);

            service.profile$.subscribe(profile => {
                expect(profile).toEqual(profile);
            });
        }));
    });

    describe('#updateUserPackingList', () => {
        const packingList = [{title: 'Good mood', packed: true}] as PackingItem[];
        const updatedProfile = {packingList} as unknown as User;

        beforeEach(fakeAsync(() => {
            spyOn(service, 'updateUserProfile');

            service.updateUserPackingList(packingList);
        }));

        it('should call updateUserProfile with updated list', () => {
            expect(service.updateUserProfile).toHaveBeenCalledWith(updatedProfile);
        });
    });

    describe('#getUserStories', () => {
        let req: TestRequest;
        const storiesResponse = storiesMock;
        const userId = 'someUserId';
        const endpointUrl = `${environment.baseUrl}/dev/stories/user/${userId}`;

        beforeEach(() => {
            authServiceSpy.getUserId.and.returnValue(userId);

            service.getUserStories();
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
            expect(req.request.url).toEqual(`${endpointUrl}`);
        });


        it('should emit user stories', fakeAsync(() => {
            req.flush(storiesResponse);
            tick(100);

            service.stories$.subscribe(stories => {
                tick(100);
                expect(stories).toEqual(storiesResponse);
            });
        }));
    });


    describe('#removeStory', () => {
        let req: TestRequest;
        const storyIdToDelete = 'b07c3896-3b17-4689-86ef-4bc6ec25ef15';
        const endpointUrl = `${environment.baseUrl}/dev/stories/${storyIdToDelete}`;
        const profile = {
            name: 'SomeName',
            stories: [storyIdToDelete],
        } as User;

        const stories = [{storyId: storyIdToDelete}] as Story[];

        beforeEach(fakeAsync(() => {
            // @ts-ignore
            service._stories.next(stories);
            // @ts-ignore
            service._profile.next(profile);
            spyOn(service, 'updateUserProfile');

            service.removeStory(storyIdToDelete);
            tick(100);

            req = httpTestingController.expectOne(endpointUrl);

        }));

        it('should make http request', () => {
            expect(req.request.method).toEqual('DELETE');
            expect(req.request.url).toEqual(`${endpointUrl}`);
        });

        it('should call updateUserProfile', () => {
            req.flush(null);
            expect(service.updateUserProfile).toHaveBeenCalledWith({name: 'SomeName', stories: []} as User);
        });

        it('should emit updatedStories', fakeAsync(() => {
            req.flush(null);
            tick(100);

            service.stories$.subscribe(val => {
                expect(val).toEqual([]);
            });
        }));
        // it('should emit updated stories', fakeAsync(() => {
        //     const userStories = storiesMock.filter(story => story.userId === userId);
        //     const expectedStories = userStories.filter(story => story.storyId !== storyIdToDelete);
        //     // @ts-ignore
        //     service._stories.next(userStories);
        //
        //     service.removeStory(storyIdToDelete);
        //
        //     service.stories$.subscribe(stories => {
        //         tick(100);
        //
        //         expect(stories).toEqual(expectedStories);
        //     });
        // }));
    });
});
