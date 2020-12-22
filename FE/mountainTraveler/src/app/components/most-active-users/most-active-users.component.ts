import { Component, OnInit } from '@angular/core';
import {MostActiveUsers} from '../../common/models/most-active-users';
import {mostActiveUsersMock} from '../../common/testing/mocks/most-active-users';

@Component({
  selector: 'app-most-active-users',
  templateUrl: './most-active-users.component.html',
  styleUrls: ['./most-active-users.component.scss'],
})
export class MostActiveUsersComponent {
  mostActiveUsers: MostActiveUsers[];

  constructor() {
    this.mostActiveUsers = mostActiveUsersMock;
  }

}
