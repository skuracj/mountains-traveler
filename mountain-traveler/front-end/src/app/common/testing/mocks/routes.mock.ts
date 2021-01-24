import {Route} from '../../models/route';
import {HikingLevelsValue, RouteTypeValue, TripDurationValue} from '../../constants/FiltersValues.enum';

export const routesMock: Route[] = [
    {
        routeId: '9938d01f-5cf1-4078-b5b1-2501df4ea1c6',
        startingPoint: {
            lat: '49.2693317',
            lng: '19.9770293',
            formattedName: ''
        },
        distance: 12,
        uphill: 2301,
        hikingLevel: HikingLevelsValue.easy,
        routeType: RouteTypeValue.roundTrip,
        suitableForKids: true,
        tripDuration: {
            displayValue: TripDurationValue.short,
            hours: 4.5
        },
        usersRatings: 5
    },
    {
        routeId: '6b4caaf5-f612-470d-bd14-2fbeefd23969',
        startingPoint: {
            lat: '49.2736375',
            lng: '19.9491093',
            formattedName: ''
        },
        distance: 21,
        uphill: 2601,
        destinationPoint: '49.2740186,19.9488565',
        hikingLevel: HikingLevelsValue.medium,
        routeType: RouteTypeValue.oneWay,
        suitableForKids: false,
        tripDuration: {
            displayValue: TripDurationValue.medium,
            hours: 5
        },
        usersRatings: 4
    },
    {
        routeId: 'c3cd409a-1c0c-4f60-a302-dbffe7ef100f',
        startingPoint: {
            lat: '49.2550075',
            lng: '20.1007657',
            formattedName: ''
        },
        distance: 32,
        uphill: 3101,
        hikingLevel: HikingLevelsValue.hard,
        routeType: RouteTypeValue.roundTrip,
        suitableForKids: false,
        tripDuration: {
            displayValue: TripDurationValue.long,
            hours: 11.5
        },
        usersRatings: 3
    }];
