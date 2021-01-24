import {CommonValue, HikingLevelsValue, RouteTypeValue, TripDurationValue} from './FiltersValues.enum';
import {FilterName} from './FiltersNames.enum';

export const HikingLevels = {
    filterName: FilterName.hikingLevels,
    filterValues: [
        {
            value: CommonValue.all,
            displayValue: 'All'
        },
        {
            value: HikingLevelsValue.easy,
            displayValue: 'Easy'
        },
        {
            value: HikingLevelsValue.medium,
            displayValue: 'Medium'
        },
        {
            value: HikingLevelsValue.hard,
            displayValue: 'Hard'
        }
    ]
};

export const TripDuration = {
    filterName: FilterName.tripDuration,
    filterValues: [
        {
            value: CommonValue.all,
            displayValue: 'All'
        },
        {
            value: TripDurationValue.short,
            displayValue: '1-3h',

        },
        {
            value: TripDurationValue.medium,
            displayValue: '3-6h',
        },
        {
            value: TripDurationValue.long,
            displayValue: '6h+',
        }
    ]
};

export const SuitableForKids = {
    filterName: FilterName.suitableForKids,
    filterValues: [
        {
            value: CommonValue.all,
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
    filterName: FilterName.routeType,
    filterValues: [
        {
            value: CommonValue.all,
            displayValue: 'All'
        },
        {
            value: RouteTypeValue.oneWay,
            displayValue: 'One way'
        },
        {
            value: RouteTypeValue.roundTrip,
            displayValue: 'Round trip'
        }
    ]
};
