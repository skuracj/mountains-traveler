import {Component, Input, OnInit} from '@angular/core';
import {Relation, UserRelations} from '../../common/models/relation';
import {usersRelationsMock} from '../../common/testing/mocks/users-relations.mock';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent {
  // @Input() relations?: Relations[];
  @Input() usersIds: string[];
  @Input() userId?: string;
  relations: UserRelations[];
  // TODO think how to implement lazy loading
  constructor() {
    this.getUsersRelations();
  }

  getUsersRelations(): Relation[] {
    this.relations = usersRelationsMock;
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
