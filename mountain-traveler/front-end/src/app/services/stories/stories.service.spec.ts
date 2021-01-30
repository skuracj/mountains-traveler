import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {StoriesService} from './stories.service';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {usersMock} from '../../common/testing/mocks/users.mock';
import {Story} from '../../common/models/story';

describe('StoriesService', () => {
    let service: StoriesService;
    let httpTestingController: HttpTestingController;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [StoriesService],
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(StoriesService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getStories', () => {
        let req: TestRequest;
        const endpointUrl = `${environment.baseUrl}/dev/stories`;
        const expectedStories = storiesMock;

        beforeEach(() => {
            service.getStories();
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });

        it('should emit stories', fakeAsync(() => {
            req.flush(expectedStories);
            tick(100);


            service.stories$.subscribe(stories => {
                tick(100);

                expect(stories).toEqual(expectedStories);
            });
        }));
    });

    describe('#getStoriesByUserIds', () => {
        let req: TestRequest;
        const usersIds: string[] = [storiesMock[0].userId, storiesMock[1].userId];
        const expectedStories = [{...storiesMock[0]}, {...storiesMock[1]}];
        const endpointUrl = `${environment.baseUrl}/dev/stories/user/${usersIds}`;

        beforeEach(() => {
            service.getStoriesByUserIds([...usersIds]);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });

        it('should emit stories for user with passed ids', fakeAsync(() => {
            req.flush(expectedStories);
            tick(100);

            service.stories$.subscribe(stories => {
                tick(100);

                expect(stories).toEqual(expectedStories);
            });
        }));
    });

    describe('#removeStory', () => {
        let req: TestRequest;
        const storyId: string = storiesMock[0].storyId;
        const expectedStories = storiesMock.filter(story => story.storyId !== storyId);
        const endpointUrl = `${environment.baseUrl}/dev/stories/${storyId}`;

        beforeEach(() => {
            service.removeStory(storyId);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('DELETE');
        });


        it('should emit stories without deleted one', fakeAsync(() => {
            req.flush(expectedStories);
            tick(100);

            service.stories$.subscribe(stories => {
                tick(100);

                expect(stories).toEqual(expectedStories);
            });
        }));
    });


    describe('#toggleLike', () => {
        let req: TestRequest;
        const userId = 'someId';
        const storyId = 'someStoryId';
        const endpointUrl = `${environment.baseUrl}/dev/stories/${storyId}`;
        const expectedStories = [{likes: userId}] as unknown as Story[];

        beforeEach(() => {
            service.toggleLike(storyId, userId);
            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('PATCH');
            expect(req.request.body).toEqual({userId});
        });

        it('should emit stories with added like', fakeAsync(() => {
            req.flush(expectedStories);
            tick(100);
            // @ts-ignore
            service._stories.next(expectedStories);

            service.stories$.subscribe(stories => {
                tick(100);

                expect(stories).toEqual(expectedStories);
            });
        }));
    });

    // describe('#removeLikeFromStory', () => {
    //   it('should emit stories with added like', fakeAsync(() => {
    //     const userId = 'loggedInUser_ID';
    //     const storyId = 'b650707e-3068-41e9-a16d-5f3afad44bee';
    //     const expectedStories = storiesMock;
    //     const storyIndex = expectedStories.findIndex(story => story.storyId === storyId);
    //     const likeIndex = expectedStories[storyIndex].likes.findIndex(like => like === userId);
    //     expectedStories[storyIndex].likes.splice(likeIndex, 1);
    //     // @ts-ignore
    //     service._stories.next(storiesMock);
    //
    //     service.removeLikeFromStory(storyId, userId);
    //
    //     service.stories$.subscribe(stories => {
    //       tick(100);
    //
    //       expect(stories).toEqual(expectedStories);
    //     });
    //   }));
    // });

});
