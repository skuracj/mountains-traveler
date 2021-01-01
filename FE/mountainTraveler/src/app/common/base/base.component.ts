import {RouteSegments} from '../constants/RouteSegments.enum';
import {QueryParamNames} from '../constants/QueryParamNames.enum';
import {StorageObject} from '../constants/StorageObjects.enum';
import {HikingLevels} from '../constants/HikingLevels.enum';
import {ComponentType} from '../constants/ComponentType.enum';
import {CitiesMappedToCountry} from '../constants/Cities.enum';
import {HikingLevelsValues} from '../constants/FiltersValues.enum';
import {FilterNames} from '../constants/FiltersNames.enum';


export class BaseComponent {
    public routeSegments = RouteSegments;
    public queryParamNames = QueryParamNames;
    public storageObject = StorageObject;
    public hikingLevels = HikingLevelsValues;
    public componentType = ComponentType;
    public filtersNames = FilterNames;
    public citiesMappedToCountry = CitiesMappedToCountry;

    constructor() {
    }

    getQueryParams(queryParamName: QueryParamNames, queryParamValue: string) {
        if (!queryParamName || !queryParamValue) {
            return null;
        }
        return {[queryParamName]: queryParamValue};
    }

}
