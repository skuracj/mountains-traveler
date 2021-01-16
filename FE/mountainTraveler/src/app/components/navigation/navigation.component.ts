import {Component} from '@angular/core';
import {RouteSegment} from '../../common/constants/RouteSegments.enum';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: ['navigation.component.scss']
})
export class NavigationComponent {
    public routeSegments = RouteSegment;

    constructor(public router: Router) {
    }

}
