import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {User} from '../../common/models/user';
import {BaseUserService} from '../../services/user/user.service';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnChanges{
    @Input() user: User;
    @Input() isProfileOwner = false;
    @Output() openSettingsModal: EventEmitter<any> = new EventEmitter();

    constructor(private userService: BaseUserService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.user.previousValue !== changes.user.currentValue) {
            this.userService.loadUserData();
        }
    }

    onSettingsButtonClicked() {
        this.openSettingsModal.emit();
    }
}
