import {Component, OnDestroy, OnInit} from '@angular/core';
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

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss']
})
export class PeoplePage extends BaseComponent implements OnInit, OnDestroy {
    selectedSection: string;
    sections = Sections;
    profileSubscription: Subscription;
    profile: User;
    friends$: Observable<User[]>;
    friendsStories$: Observable<any>;


    originalOrder = Utils.originalOrder;

    constructor(
        private modalController: ModalController,
        private userService: BaseUserService,
        private storiesService: BaseStoriesService,
        private profileService: BaseProfileService) {
        super();
    }

    async ngOnInit() {
        this.selectedSection = Sections.me;
        this.profileSubscription = this.profileService.profile$.pipe(
            tap(profile => console.log(profile)),
            map(profile => {
                    this.profile = profile;
                }
            )).subscribe();

        this.userService.getUsersByIds(this.profile.friendsIds);
        this.friends$ = this.userService.users$;

        this.storiesService.getStoriesByUserIds(this.profile.friendsIds);
        this.friendsStories$ = this.storiesService.stories$.pipe(
            tap(stories => console.log(stories))
        );
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
