import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-travel-planner',
    templateUrl: './travel-planner.page.html',
    styleUrls: ['./travel-planner.page.scss'],
})
export class TravelPlannerPage extends BaseComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.activatedRoute.queryParams.pipe(
            tap(queryParam => console.log(queryParam))
        ).subscribe();
    }

}
