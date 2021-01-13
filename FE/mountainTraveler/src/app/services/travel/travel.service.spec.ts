import {TestBed} from '@angular/core/testing';
import {TravelService} from './travel.service';
import {BaseGeocodingService} from '../geocoding/geocoding.service';

describe('TravelService', () => {
    let service: TravelService;
    let geocodingServiceSpy;

    beforeEach(() => {
        geocodingServiceSpy = jasmine.createSpyObj('BaseGeocodingService', ['getLocation'])
        TestBed.configureTestingModule({
            providers: [TravelService,
                {provide: BaseGeocodingService, useValue: geocodingServiceSpy}]
        });
        service = TestBed.inject(TravelService);
        geocodingServiceSpy.getLocation.and.returnValue('LocationString');
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return routes', () => {
       const routes = service.getRoutes();

       expect(routes).toBeTruthy();
    });
});
