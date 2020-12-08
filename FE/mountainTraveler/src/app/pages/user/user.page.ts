import {Component, OnInit} from '@angular/core';
import {uuid4} from '@capacitor/core/dist/esm/util';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage extends BaseComponent implements OnInit {
    userId: string;

    constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this.activatedRoute.queryParams.pipe(
            map(queryParams => this.userId = queryParams[this.queryParamNames.userId]),
        ).subscribe();
    }

}
