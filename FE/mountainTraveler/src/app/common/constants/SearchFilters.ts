import {CommonValues, HikingLevelsValues, RouteTypeValues, TripDurationValues} from './FiltersValues.enum';
import {FilterNames} from './FiltersNames.enum';

export const HikingLevels = {
    filterName: FilterNames.hikingLevels,
    filterValues: [
        {
            value: CommonValues.all,
            displayValue: 'All'
        },
        {
            value: HikingLevelsValues.easy,
            displayValue: 'Easy'
        },
        {
            value: HikingLevelsValues.medium,
            displayValue: 'Medium'
        },
        {
            value: HikingLevelsValues.hard,
            displayValue: 'Hard'
        }
    ]
};

export const TripDuration = {
    filterName: FilterNames.tripDuration,
    filterValues: [
        {
            value: CommonValues.all,
            displayValue: 'All'
        },
        {
            value: TripDurationValues.short,
            displayValue: '1-3h',

        },
        {
            value: TripDurationValues.medium,
            displayValue: '3-6h',
        },
        {
            value: TripDurationValues.long,
            displayValue: '6h+',
        }
    ]
};

export const SuitableForKids = {
    filterName: FilterNames.suitableForKids,
    filterValues: [
        {
            value: CommonValues.all,
            displayValue: 'All'
        },
        {
            value: true,
            displayValue: 'Yes',

        }, {
            value: false,
            displayValue: 'No',
        }
    ]
};

export const RouteType = {
    filterName: FilterNames.routeType,
    filterValues: [
        {
            value: CommonValues.all,
            displayValue: 'All'
        },
        {
            value: RouteTypeValues.oneWay,
            displayValue: 'One way'
        },
        {
            value: RouteTypeValues.roundTrip,
            displayValue: 'Round trip'
        }
    ]
};
