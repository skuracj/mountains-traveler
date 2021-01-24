import { Component } from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {HikingLevel} from '../../common/constants/HikingLevels.enum';

@Component({
  selector: 'app-travel-planner-intro',
  templateUrl: 'travel-planner-intro.page.html',
  styleUrls: ['travel-planner-intro.page.scss']
})
export class TravelPlannerIntroPage extends BaseComponent{
  levels: HikingLevel[] = Object.values(HikingLevel);

  constructor() {
    super();
  }

}
