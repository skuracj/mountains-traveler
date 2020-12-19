import { Component } from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {HikingLevels} from '../../common/constants/HikingLevels.enum';

@Component({
  selector: 'app-plan-travel',
  templateUrl: 'plan-travel.page.html',
  styleUrls: ['plan-travel.page.scss']
})
export class PlanTravelPage extends BaseComponent{
  levels: HikingLevels[] = Object.values(HikingLevels);

  constructor() {
    super();
  }

}
