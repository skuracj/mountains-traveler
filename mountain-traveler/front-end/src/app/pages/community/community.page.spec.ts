import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CommunityPage} from './community.page';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {BaseUserService} from '../../services/user/user.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs';
import {MostActiveUser} from '../../common/models/most-active-user';
import {Story} from '../../common/models/story';

describe('CommunityPage', () => {
    let component: CommunityPage;
    let fixture: ComponentFixture<CommunityPage>;
    let baseStoryServiceSpy;
    let baseUserServiceSpy;
    const mostActiveUsersMock = of([] as MostActiveUser[]);

    beforeEach(async(() => {
        baseUserServiceSpy = jasmine.createSpyObj(BaseUserService, ['getMostActiveUsers']);
        baseStoryServiceSpy = jasmine.createSpyObj(BaseStoriesService, ['getStories']);

        TestBed.configureTestingModule({
            declarations: [CommunityPage],
            imports: [IonicModule],
            providers: [
                {provide: BaseStoriesService, useValue: baseStoryServiceSpy},
                {provide: BaseUserService, useValue: baseUserServiceSpy},
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
        baseUserServiceSpy.getMostActiveUsers.and.returnValue(mostActiveUsersMock);

        baseStoryServiceSpy.getStories.and.stub();
        baseStoryServiceSpy.stories$ = of([] as Story[]);

        fixture = TestBed.createComponent(CommunityPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.ionViewWillEnter();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('When page entered', () => {
        it('Should call UserService to fetch most active users', () => {
            expect(baseUserServiceSpy.getMostActiveUsers).toHaveBeenCalled();
        });

        it('should assign mostActiveUsers$ to observable from userService', () => {
            expect(component.mostActiveUsers$).toEqual(mostActiveUsersMock);
        });

        it('Should call StoriesService to fetch stories', () => {
            expect(baseStoryServiceSpy.getStories).toHaveBeenCalled();
        });

        it('should assign stories$ to observable from storiesService', () => {
            expect(component.stories$).toEqual(baseStoryServiceSpy.stories$);
        });
    });
});
