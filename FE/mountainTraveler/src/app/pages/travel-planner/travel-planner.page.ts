import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';
import {QueryParamNames} from '../../common/constants/QueryParamNames.enum';
import {HikingLevels, RouteType, SuitableForKids, TripDuration} from '../../common/constants/SearchFilters';
import {AccordionComponent} from '../../components/accordion/accordion.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FilterNames} from '../../common/constants/FiltersNames.enum';
import {CommonValues} from '../../common/constants/FiltersValues.enum';
import {Route} from '../../common/models/route';
import {Observable} from 'rxjs';
import {BaseTravelService, TravelService} from '../../services/travel/travel.service';
import {BaseGeocodingService} from '../../services/geocoding/geocoding.service';
import {routesMock} from '../../common/testing/mocks/routes.mock';

@Component({
    selector: 'app-travel-planner',
    templateUrl: './travel-planner.page.html',
    styleUrls: ['./travel-planner.page.scss'],

})
export class TravelPlannerPage extends BaseComponent implements OnInit {
    public isExpanded = true;
    public searchFilters = [HikingLevels, RouteType, SuitableForKids, TripDuration];
    public selectedDifficultyLevel;
    public travelForm: FormGroup;
    public routes$: Observable<Route[]>;

    @ViewChild('filtersAccordion') filtersAccordion: AccordionComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        public formBuilder: FormBuilder,
        private travelService: BaseTravelService,
        public geoCodingService: BaseGeocodingService) {
        super();
    }

    ngOnInit() {
        this.createForm();
        this.activatedRoute.queryParams.pipe(
            tap(queryParam => this.travelForm.patchValue({
                [FilterNames.hikingLevels]: queryParam[QueryParamNames.level]
            }))
        ).subscribe();

        this.geoCodingService.getLocation(routesMock[0].startingPoint).subscribe(data => console.log(data));
    }

    getRoutes(): Observable<Route[]> {
        this.travelService.getRoutes();
        return this.travelService.routes$;
    }


    createForm() {
        this.travelForm = this.formBuilder.group({
            [FilterNames.startingPoint]: [null, Validators.required],
            [FilterNames.destinationPoint]: [null],
            [FilterNames.hikingLevels]: [CommonValues.all],
            [FilterNames.routeType]: [CommonValues.all],
            [FilterNames.suitableForKids]: [CommonValues.all],
            [FilterNames.tripDuration]: [CommonValues.all],
            [FilterNames.usersRating]: [2],
        });
    }

    logRatingChange(event) {
        console.log(event);
    }

    applyFilters() {
        console.log(this.travelForm.value);
        this.filtersAccordion.closeAccordion();
    }

}
