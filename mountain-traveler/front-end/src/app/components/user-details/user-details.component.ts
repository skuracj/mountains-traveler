import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../common/models/user';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
    @Input() user: User;
    @Input() isProfileOwner = false;
    @Output() openSettingsModal: EventEmitter<any> = new EventEmitter();

    constructor() {}

    onSettingsButtonClicked() {
        this.openSettingsModal.emit();
    }
}
