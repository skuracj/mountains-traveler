import { Component, OnInit } from '@angular/core';
import {uuid4} from '@capacitor/core/dist/esm/util';
import {ActivatedRoute} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {BaseComponent} from '../../common/base/base.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage extends BaseComponent implements OnInit{
  userId: string = uuid4();
  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(
        map(queryParams => this.userId = queryParams[this.queryParamNames.userId]),
    ).subscribe();
  }

}
