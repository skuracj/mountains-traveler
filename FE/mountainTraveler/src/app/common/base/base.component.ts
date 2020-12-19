import {RouteSegments} from '../constants/RouteSegments.enum';
import {QueryParamNames} from '../constants/QueryParamNames.enum';
import {StorageObject} from '../constants/StorageObjects.enum';
import {HikingLevels} from '../constants/HikingLevels.enum';

export class BaseComponent {
    public routeSegments = RouteSegments;
    public queryParamNames = QueryParamNames;
    public storageObject = StorageObject;
    public hikingLevels =  HikingLevels;

    constructor() {
    }

}
