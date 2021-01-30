import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Sections} from '../../common/constants/Sections.enum';
import {User} from '../../common/models/user';
import {ModalController} from '@ionic/angular';
import {UserSettingsPage} from '../../components/user-settings/user-settings.page';
import {Utils} from '../../common/utils';
import {BaseUserService} from '../../services/user/user.service';
import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {BaseProfileService} from '../../services/profile/profile.service';
import {Story} from '../../common/models/story';
import {BaseStoriesService} from '../../services/stories/stories.service';
import {MostActiveUser} from '../../common/models/most-active-user';
import {BaseAuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeoplePage extends BaseComponent implements OnInit {
    selectedSection: Sections;
    profileSubscription: Subscription;
    profile: User;
    userStories$: Observable<Story[]>;
    friends$: Observable<User[]>;
    friendsStories$: Observable<Story[]>;
    mostActiveFriends$: Observable<MostActiveUser[]>;

    originalOrder = Utils.originalOrder;

    constructor(
        private modalController: ModalController,
        private userService: BaseUserService,
        private storiesService: BaseStoriesService,
        private profileService: BaseProfileService,
        private authService: BaseAuthService) {
        super();
    }

    ngOnInit() {
        if (!this.selectedSection) {
            this.selectedSection = Sections.me;
        }
    }

    async ionViewWillEnter() {
        await this.getUserData();
        // this.userStories$ = this.profileService.stories$;
    }

    async getUserData() {
        try {
            await this.profileService.loadUserProfile();
        } catch (e) {
            console.error(e);
        }

        this.profileSubscription = this.profileService.profile$.pipe(
            tap(data => console.log('profile', data)),
            map(profile => {
                    this.profile = profile;
                    this.getFriends(profile.friendsIds);
                    this.getUserStories();
                    this.mostActiveFriends();
                    this.friendsStories();
                },
            )).subscribe();
    }

    getFriends(users: string[]) {
        if (!users.length) {
            return;
        }
        this.friends$ = this.userService.getUsersByIds(users);
    }

    getUserStories() {
        const userId = this.authService.getUserId();
        this.userStories$ =  this.storiesService.getStoriesByUserId(userId);
    }

    mostActiveFriends() {
        this.mostActiveFriends$ = this.userService.getMostActiveUsers(this.profile.friendsIds);
    }

    friendsStories() {
        this.storiesService.getStoriesByUsersIds(this.profile.friendsIds);
        this.friendsStories$ = this.storiesService.stories$;
    }

    ionViewWillLeave() {
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
                stories$: this.userStories$,
            },
        });
        await modal.present();
    }
}
