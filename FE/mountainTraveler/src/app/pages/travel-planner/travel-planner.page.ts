import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';
import {QueryParamNames} from '../../common/constants/QueryParamNames.enum';
import {HikingLevels, RouteType, SuitableForKids, TripDuration} from '../../common/constants/SearchFilters';

@Component({
    selector: 'app-travel-planner',
    templateUrl: './travel-planner.page.html',
    styleUrls: ['./travel-planner.page.scss'],
})
export class TravelPlannerPage extends BaseComponent implements OnInit {
    isExpand = false;
    testSearchFilters = [HikingLevels, RouteType, SuitableForKids, TripDuration];
    selectedDifficultyLevel;

    constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.activatedRoute.queryParams.pipe(
            tap(queryParam => this.selectedDifficultyLevel = queryParam[QueryParamNames.level])
        ).subscribe();
    }

}
