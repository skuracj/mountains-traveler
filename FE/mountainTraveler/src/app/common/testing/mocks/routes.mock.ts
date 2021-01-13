import {Route} from '../../models/route';
import {HikingLevelsValues, RouteTypeValues, TripDurationValues} from '../../constants/FiltersValues.enum';

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
        hikingLevel: HikingLevelsValues.easy,
        routeType: RouteTypeValues.roundTrip,
        suitableForKids: true,
        tripDuration: TripDurationValues.medium,
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
        hikingLevel: HikingLevelsValues.medium,
        routeType: RouteTypeValues.oneWay,
        suitableForKids: false,
        tripDuration: TripDurationValues.short,
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
        hikingLevel: HikingLevelsValues.hard,
        routeType: RouteTypeValues.roundTrip,
        suitableForKids: false,
        tripDuration: TripDurationValues.long,
        usersRatings: 3
    }];