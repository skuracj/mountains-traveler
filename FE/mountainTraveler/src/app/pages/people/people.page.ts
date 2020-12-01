import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../common/base/base.component';
import {Storage} from '@ionic/storage';
import {Router} from '@angular/router';
import {Sections} from '../../common/constants/Sections.enum';
import {KeyValue} from '@angular/common';

@Component({
    selector: 'app-people',
    templateUrl: 'people.page.html',
    styleUrls: ['people.page.scss']
})
export class PeoplePage extends BaseComponent implements OnInit {
    section: string;
    sections = Sections;

    constructor(private storage: Storage, private router: Router) {
        super();
    }

    async ngOnInit() {
        // this.sections = Object.values(Sections);
        this.section = Sections.me;
        // https://github.com/localForage/localForage/issues/910
        // Currently no fix for issue with storage.
        // Using hardcoded values
        // await this.storage.set('region', 'Warsaw');
    }
    originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
        return 0;
    }

    onSegmentClicked(event: CustomEvent) {
        this.section = event.detail.value;
        console.log(event.detail.value);
        console.log(this.section);
    }


}
