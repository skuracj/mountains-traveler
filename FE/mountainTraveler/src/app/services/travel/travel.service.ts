import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Route} from '../../common/models/route';
import {routesMock} from '../../common/testing/mocks/routes.mock';
import {HikingLevelsValues} from '../../common/constants/FiltersValues.enum';
import {BaseProfileService} from '../profile/profile.service';

export abstract class BaseTravelService {
    private _routes: BehaviorSubject<Route[]>;

    public readonly routes$: Observable<Route[]>;

    abstract getRoutes();

    abstract filterRoutes(routeFilters: Route);

    abstract addRoutesToFavourites(routeId: string);
}

@Injectable()
export class TravelService {

    private _routes: BehaviorSubject<Route[]> = new BehaviorSubject<Route[]>(null);

    public readonly routes$: Observable<Route[]> = this._routes.asObservable();

    constructor(private baseProfileService: BaseProfileService) {
    }

    getRoutes() {
        this._routes.next(routesMock);
    }

    filterRoutes(routeFilters: Route) {
        const filteredRoutes = routesMock.filter(route => route.hikingLevel === HikingLevelsValues.medium);
        this._routes.next(filteredRoutes);
    }

    addRoutesToFavourites(routeId: string) {
        // this.baseProfileService.addFavouriteRoute(routeId);
    }
}
