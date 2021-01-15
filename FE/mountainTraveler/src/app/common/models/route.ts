import {HikingLevelsValues, RouteTypeValues, TripDurationValues} from '../constants/FiltersValues.enum';
import {GeoCoordinates} from './coordinates';

export interface Route {
    routeId: string;
    distance: number;
    uphill: number;
    startingPoint: GeoCoordinates;
    destinationPoint?: string;
    hikingLevel: HikingLevelsValues;
    routeType: RouteTypeValues;
    suitableForKids: boolean;
    tripDuration: {
        displayValue: TripDurationValues,
        hours: number
    };
    usersRatings: number;
}