import {RouteSegments} from '../constants/RouteSegments.enum';
import {QueryParamNames} from '../constants/QueryParamNames.enum';
import {StorageObject} from '../constants/StorageObjects.enum';

export class BaseComponent {
    public routeSegments = RouteSegments;
    public queryParamNames = QueryParamNames;
    public storageObject = StorageObject;

    constructor() {
    }

}
