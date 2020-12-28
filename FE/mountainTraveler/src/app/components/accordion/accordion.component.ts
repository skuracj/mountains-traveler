import {Component, Input, OnInit} from '@angular/core';
import {uuid4} from '@capacitor/core/dist/esm/util';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  public isExpanded = true;
  public id = uuid4();
  @Input() title: string;

  constructor() { }

}
