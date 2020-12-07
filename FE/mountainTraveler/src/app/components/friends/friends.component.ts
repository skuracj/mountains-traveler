import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent extends BaseComponent implements OnInit {
  @Input() friendsIds: string[] = [];

  constructor() {
    super();
  }

  ngOnInit() {}

}
