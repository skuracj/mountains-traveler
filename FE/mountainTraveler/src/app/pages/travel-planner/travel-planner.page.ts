import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {take, tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';
import {QueryParamName} from '../../common/constants/QueryParamNames.enum';
import {HikingLevels, RouteType, SuitableForKids, TripDuration} from '../../common/constants/SearchFilters';
import {AccordionComponent} from '../../components/accordion/accordion.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FilterName} from '../../common/constants/FiltersNames.enum';
import {CommonValue} from '../../common/constants/FiltersValues.enum';
import {Route} from '../../common/models/route';
import {Observable} from 'rxjs';
import {BaseTravelService} from '../../services/travel/travel.service';

@Component({
    selector: 'app-travel-planner',
    templateUrl: './travel-planner.page.html',
    styleUrls: ['./travel-planner.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class TravelPlannerPage extends BaseComponent implements OnInit {
    public isSearchSectionExpanded = true;
    public isFiltersAccordionExpanded = true;
    public isRoutesAccordionExpanded = false;
    public searchFilters = [HikingLevels, RouteType, SuitableForKids, TripDuration];
    public selectedDifficultyLevel;
    public travelForm: FormGroup;
    public routes$: Observable<Route[]>;

    @ViewChild('filtersAccordion') filtersAccordion: AccordionComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        public formBuilder: FormBuilder,
        private travelService: BaseTravelService) {
        super();
    }

    async ngOnInit() {
        this.createForm();
        this.extractHikingLevelFromQueryParams();
        await this.loadRoutes();
    }

    async loadRoutes() {
        await this.travelService.getRoutes();
        this.routes$ = this.travelService.routes$;
    }

    extractHikingLevelFromQueryParams() {
        this.activatedRoute.queryParams.pipe(
            take(1),
            tap(queryParam => this.travelForm.patchValue({
                [FilterName.hikingLevels]: queryParam[QueryParamName.level]
            }))
        ).subscribe();
    }


    createForm() {
        this.travelForm = this.formBuilder.group({
            [FilterName.startingPoint]: [null, Validators.required],
            [FilterName.destinationPoint]: [null],
            [FilterName.hikingLevels]: [CommonValue.all],
            [FilterName.routeType]: [CommonValue.all],
            [FilterName.suitableForKids]: [CommonValue.all],
            [FilterName.tripDuration]: [CommonValue.all],
            [FilterName.usersRating]: [2],
        });
    }

    logRatingChange(event) {
        console.log(event);
    }

    applyFilters() {
        this.isFiltersAccordionExpanded = false;
        this.isRoutesAccordionExpanded = true;
        this.filtersAccordion.closeAccordion();
    }

}
