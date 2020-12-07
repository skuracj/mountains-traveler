import {RouteSegments} from "../constants/RouteSegments.enum";
import {QueryParamNames} from '../constants/QueryParamNames.enum';

export class BaseComponent  {
  public routeSegments = RouteSegments;
  public queryParamNames = QueryParamNames;

  constructor() { }

}
