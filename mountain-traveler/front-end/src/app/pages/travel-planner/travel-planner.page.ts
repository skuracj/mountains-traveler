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
import {BaseRoutesService} from '../../services/routes/routes.service';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';


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
    map: Map;


    @ViewChild('filtersAccordion') filtersAccordion: AccordionComponent;

    constructor(
        private activatedRoute: ActivatedRoute,
        public formBuilder: FormBuilder,
        private travelService: BaseRoutesService) {
        super();
    }

    async ngOnInit() {
        this.createForm();
        this.extractHikingLevelFromQueryParams();
        await this.loadRoutes();
        this.loadMap();
    }

    loadMap() {
        setTimeout(() => {
            this.map = new Map('map').setView([49.2714765, 19.9774387], 8);

            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                // tslint:disable-next-line
                attribution: `Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery 
    © <a href="https://www.mapbox.com/">Mapbox</a>`,
            maxZoom: 18
        }).addTo(this.map);

        }, 50);
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
