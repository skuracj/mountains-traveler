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
import {MostActiveUsers} from '../../common/models/most-active-users';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeoplePage extends BaseComponent implements OnInit, OnDestroy, OnChanges {
    selectedSection: string;
    profileSubscription: Subscription;
    profile: User;
    friends$: Observable<User[]>;
    userStories$: Observable<Story[]>;
    mostActiveFriends$: Observable<MostActiveUsers[]>;
s;
    originalOrder = Utils.originalOrder;

    constructor(
        private modalController: ModalController,
        private userService: BaseUserService,
        private storiesService: BaseStoriesService,
        private profileService: BaseProfileService) {
        super();
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('onchanges');
    }

    async ngOnInit() {
        this.selectedSection = Sections.me;
        this.profileSubscription = this.profileService.profile$.pipe(
            tap(profile => console.log('profile', profile)),
            map(profile => {
                    this.profile = profile;
                    this.userService.getUsersByIds(profile.friendsIds);
                }
            )).subscribe();

        this.userStories$ = this.storiesService.stories$;
        this.friends$ = this.userService.users$;
    }

    mostActiveUsers() {
        this.userService.getMostActiveUsers(this.profile.friendsIds);
        return this.userService.mostActiveUsers$;
    }

    userStories() {
        this.storiesService.getStoriesByUserIds([this.profile.userId]);
        return this.storiesService.stories$;
    }

    friendsStories() {
        console.log('friendsStoriesLoaded');
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
        if (this.profile) {
            const modal: HTMLIonModalElement = await this.modalController.create({
                component: UserSettingsPage,
                componentProps: {
                    user: this.profile
                }
            });
            await modal.present();
        }
    }


}
