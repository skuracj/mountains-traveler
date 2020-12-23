import {Component, Input, OnInit} from '@angular/core';
import {Relation} from '../../common/models/relation';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent {
  // @Input() relations?: Relations[];
  @Input() usersIds: string[];
  @Input() userId?: string;
  // TODO think how to implement lazy loading
  constructor() { }

  getUsersRelations(): Relation[] {
    // Get relations by usersIds
    // Return
    return [] as Relation[];
  }

  addLike(relationId: string) {
    // call api with relationId and user id / push to relation array
  }

  removeLike(relationId: string) {
    // call api with relationId and user id / removeId from relation array

  }
}
