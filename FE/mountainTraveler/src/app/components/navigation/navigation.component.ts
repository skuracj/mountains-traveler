import { Component } from '@angular/core';
import {RouteSegments} from "../../common/constants/RouteSegments.enum";

@Component({
  selector: 'app-tabs',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss']
})
export class Navigation {
  public routeSegments =  RouteSegments;

  constructor() {}

}
