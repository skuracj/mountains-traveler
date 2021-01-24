import {HikingLevelsValue, RouteTypeValue, TripDurationValue} from '../constants/FiltersValues.enum';
import {GeoCoordinates} from './coordinates';

export interface Route {
    routeId: string;
    distance: number;
    uphill: number;
    startingPoint: GeoCoordinates;
    destinationPoint?: string;
    hikingLevel: HikingLevelsValue;
    routeType: RouteTypeValue;
    suitableForKids: boolean;
    tripDuration: {
        displayValue: TripDurationValue,
        hours: number
    };
    usersRatings: number;
}