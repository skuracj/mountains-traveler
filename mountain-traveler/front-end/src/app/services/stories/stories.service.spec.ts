import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import { StoriesService } from './stories.service';
import {storiesMock} from '../../common/testing/mocks/stories.mock';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('StoriesService', () => {
  let service: StoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoriesService]
    });
    service = TestBed.inject(StoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getStories', () => {
    it('should emit stories', fakeAsync(() => {
      const expectedStories = storiesMock;

      service.getStories();

      service.stories$.subscribe(stories => {
        tick(100);

        expect(stories).toEqual(expectedStories);
      });
    }));
  });

  describe('#removeStory', () => {
    it('should emit stories without deleted one', fakeAsync(() => {
      const storyIdToDelete = 'b07c3896-3b17-4689-86ef-4bc6ec25ef15';
      // @ts-ignore
      service._stories.next(storiesMock);
      const expectedStories = storiesMock.filter(story => story.storyId !== storyIdToDelete);;

      service.removeStory(storyIdToDelete);

      service.stories$.subscribe(stories => {
        tick(100);

        expect(stories).toEqual(expectedStories);
      });
    }));
  });

  describe('#getStoriesByUserIds', () => {
    it('should emit stories for user with passed ids', fakeAsync(() => {
      const usersIds = ['mudzina1_ID', 'loggedInUser_ID'];
      const expectedStories = storiesMock.filter(story => usersIds.includes(story.userId));

      service.getStoriesByUserIds(usersIds);

      service.stories$.subscribe(stories => {
        tick(100);

        expect(stories).toEqual(expectedStories);
      });
    }));
  });

  describe('#addLikeToStory', () => {
    it('should emit stories with added like', fakeAsync(() => {
      const userId = 'loggedInUser_ID';
      const storyId = 'b650707e-3068-41e9-a16d-5f3afad44bee';
      const expectedStories = storiesMock;
      expectedStories.find(story => story.storyId === storyId)
          .likes.push(userId);
      // @ts-ignore
      service._stories.next(storiesMock);

      service.addLikeToStory(storyId, userId);

      service.stories$.subscribe(stories => {
        tick(100);

        expect(stories).toEqual(expectedStories);
      });
    }));
  });

  describe('#removeLikeFromStory', () => {
    it('should emit stories with added like', fakeAsync(() => {
      const userId = 'loggedInUser_ID';
      const storyId = 'b650707e-3068-41e9-a16d-5f3afad44bee';
      const expectedStories = storiesMock;
      const storyIndex = expectedStories.findIndex(story => story.storyId === storyId);
      const likeIndex = expectedStories[storyIndex].likes.findIndex(like => like === userId);
      expectedStories[storyIndex].likes.splice(likeIndex, 1);
      // @ts-ignore
      service._stories.next(storiesMock);

      service.removeLikeFromStory(storyId, userId);

      service.stories$.subscribe(stories => {
        tick(100);

        expect(stories).toEqual(expectedStories);
      });
    }));
  });

});
