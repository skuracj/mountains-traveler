import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-picture-thumbnail',
  templateUrl: './profile-picture-thumbnail.component.html',
  styleUrls: ['./profile-picture-thumbnail.component.scss'],
})
export class ProfilePictureThumbnailComponent {
  @Input() imgPath: string;

  constructor() { }
}
