import {ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Sections} from '../../common/constants/Sections.enum';
import {User} from '../../common/models/user';
import {ModalController} from '@ionic/angular';
import {UserSettingsPage} from '../../components/user-settings/user-settings.page';
import {Utils} from '../../common/utils';
import {BaseUserService} from '../../services/user/user.service';
import {Observable, Subscription} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {BaseProfileService} from '../../services/profile/profile.service';
import {Story} from '../../common/models/story';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {MostActiveUser} from '../../common/models/most-active-user';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeoplePage extends BaseComponent implements OnInit, OnDestroy {
    selectedSection: Sections;
    profileSubscription: Subscription;
    profile: User;
    friends$: Observable<User[]>;
    userStories$: Observable<Story[]>;

    originalOrder = Utils.originalOrder;

    constructor(
        private modalController: ModalController,
        private userService: BaseUserService,
        private storiesService: BaseStoriesService,
        private profileService: BaseProfileService) {
        super();
    }

    ngOnInit() {
        if (!this.selectedSection) {
            this.selectedSection = Sections.me;
        }

        this.profileSubscription = this.profileService.profile$.pipe(
            // tap(profile => console.log('profile', profile)),
            map(profile => {
                    this.profile = profile;
                    this.profileService.getUserStories();
                    this.userService.getUsersByIds(profile.friendsIds);
                }
            )).subscribe();

        this.userStories$ = this.profileService.stories$;
        this.friends$ = this.userService.users$;
    }

    mostActiveFriends() {
        this.userService.getMostActiveUsers(this.profile.friendsIds);
        return this.userService.mostActiveUsers$;
    }

    friendsStories() {
        this.storiesService.getStoriesByUserIds(this.profile.friendsIds);
        return this.storiesService.stories$;
    }

    ngOnDestroy() {
        this.profileSubscription.unsubscribe();
    }

    onSegmentClicked(event: CustomEvent) {
        this.selectedSection = event.detail.value;
    }

    async openSettingsModal() {
            const modal: HTMLIonModalElement = await this.modalController.create({
                component: UserSettingsPage,
                componentProps: {
                    user: this.profile,
                    stories$: this.userStories$
                }
            });
            await modal.present();
    }
}
