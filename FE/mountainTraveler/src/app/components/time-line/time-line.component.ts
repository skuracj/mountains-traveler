import {Component, Input, OnInit} from '@angular/core';
import {Relations} from '../../common/models/relations';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss'],
})
export class TimeLineComponent implements OnInit {
  @Input() relations?: Relations[];
  // TODO think how to implement lazy loading
  constructor() { }

  ngOnInit() {}

}
