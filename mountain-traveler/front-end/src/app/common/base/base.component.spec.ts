import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {BaseComponent} from './base.component';
import {QueryParamName} from '../constants/QueryParamNames.enum';
import {HikingLevel} from '../constants/HikingLevels.enum';
import {HikingLevelsValue} from '../constants/FiltersValues.enum';

describe('BaseComponent', () => {
    let sut: BaseComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BaseComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        sut = new BaseComponent();
    }));

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('#getQueryParams, should return queryParams object with passed values', () => {
        const queryParamName = QueryParamName.level;
        const queryParamValue = HikingLevelsValue.easy;

        const result = sut.createQueryParamsObj(queryParamName, queryParamValue);

        expect(result).toEqual({[queryParamName]: queryParamValue});
    });

    it('#getQueryParams, should not fail if NO passed values', () => {
        const queryParamName = null;
        const queryParamValue = null;

        const result = sut.createQueryParamsObj(queryParamName, queryParamValue);

        expect(result).toEqual(null);
    });
});
