import {Component, Input, OnInit} from '@angular/core';
import {RouteSegments} from '../../common/constants/RouteSegments.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string;
  @Input() defaultHref?: string = RouteSegments.app;

  constructor() { }

  ngOnInit() {}

}
