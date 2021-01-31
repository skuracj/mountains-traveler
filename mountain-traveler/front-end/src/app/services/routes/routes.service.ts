import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Route} from '../../common/models/route';
import {routesMock} from '../../common/testing/mocks/routes.mock';
import {BaseGeocodingService} from '../geocoding/geocoding.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export abstract class BaseRoutesService {
    private _routes: BehaviorSubject<Route[]>;

    public readonly routes$: Observable<Route[]>;

    abstract async getRoutes();

    abstract filterRoutes(routeFilters: Route);

    abstract addRoutesToFavourites(routeId: string);
}

@Injectable()
export class RoutesService {

    private _routes: BehaviorSubject<Route[]> = new BehaviorSubject<Route[]>(null);

    public readonly routes$: Observable<Route[]> = this._routes.asObservable();

    constructor(private httpClient: HttpClient) {
    }

    async getRoutes() {
        try {
            const resolvedRoutes = await this.httpClient.get<Route[]>(`${environment.baseUrl}/dev/routes`).toPromise();
            this._routes.next(resolvedRoutes);
        } catch (e) {
            console.error(e);

        }
    }

    filterRoutes(routeFilters: Route) {
        // const filteredRoutes = routesMock.filter(route => route.hikingLevel === HikingLevelsValues.medium);
        // this._routes.next(filteredRoutes);
    }

    addRoutesToFavourites(routeId: string) {
        // this.baseProfileService.addFavouriteRoute(routeId);
    }
}
