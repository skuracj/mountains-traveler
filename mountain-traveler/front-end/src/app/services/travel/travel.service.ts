import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Route} from '../../common/models/route';
import {routesMock} from '../../common/testing/mocks/routes.mock';
import {BaseGeocodingService} from '../geocoding/geocoding.service';

export abstract class BaseTravelService {
    private _routes: BehaviorSubject<Route[]>;

    public readonly routes$: Observable<Route[]>;

    abstract async getRoutes();

    abstract filterRoutes(routeFilters: Route);

    abstract addRoutesToFavourites(routeId: string);
}

@Injectable()
export class TravelService {

    private _routes: BehaviorSubject<Route[]> = new BehaviorSubject<Route[]>(null);

    public readonly routes$: Observable<Route[]> = this._routes.asObservable();

    constructor(private baseGeocodingService: BaseGeocodingService) {
    }

    async getRoutes() {
        const routes = await routesMock.map(async route => {
            const {lat, lng} = route.startingPoint;
            let locationName: string;

            try {
                locationName = await this.baseGeocodingService.getLocation({lat, lng});
            } catch (e) {
                console.error(e);
            }
            route.startingPoint.formattedName = locationName;
            return route;
        });

        const resolvedRoutes = await Promise.all(routes);
        this._routes.next(resolvedRoutes);
    }

    filterRoutes(routeFilters: Route) {
        // const filteredRoutes = routesMock.filter(route => route.hikingLevel === HikingLevelsValues.medium);
        // this._routes.next(filteredRoutes);
    }

    addRoutesToFavourites(routeId: string) {
        // this.baseProfileService.addFavouriteRoute(routeId);
    }
}
