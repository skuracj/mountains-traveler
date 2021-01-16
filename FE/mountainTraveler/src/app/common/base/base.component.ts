import {RouteSegment} from '../constants/RouteSegments.enum';
import {QueryParamName} from '../constants/QueryParamNames.enum';
import {StorageObject} from '../constants/StorageObjects.enum';
import {HikingLevel} from '../constants/HikingLevels.enum';
import {ComponentType} from '../constants/ComponentType.enum';
import {CitiesMappedToCountry} from '../constants/Cities.enum';
import {HikingLevelsValue} from '../constants/FiltersValues.enum';
import {FilterName} from '../constants/FiltersNames.enum';
import {Sections} from '../constants/Sections.enum';


export class BaseComponent {
    public routeSegments = RouteSegment;
    public queryParamNames = QueryParamName;
    public storageObject = StorageObject;
    public hikingLevels = HikingLevelsValue;
    public componentType = ComponentType;
    public filtersNames = FilterName;
    public sections = Sections;
    public citiesMappedToCountry = CitiesMappedToCountry;

    constructor() {
    }

    createQueryParamsObj(queryParamName: QueryParamName, queryParamValue: string) {
        if (!queryParamName || !queryParamValue) {
            return null;
        }
        return {[queryParamName]: queryParamValue};
    }

}
