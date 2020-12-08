import { Component, OnInit } from '@angular/core';
import {MostActiveUsers} from '../../common/models/most-active-users';

@Component({
  selector: 'app-most-active-users',
  templateUrl: './most-active-users.component.html',
  styleUrls: ['./most-active-users.component.scss'],
})
export class MostActiveUsersComponent {
  // TODO - Change to required field
  mostActiveUsers?: MostActiveUsers[];

  constructor() { }

}
