import {TestBed} from '@angular/core/testing';
import {TravelService} from './travel.service';

describe('TravelService', () => {
    let service: TravelService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TravelService]
        });
        service = TestBed.inject(TravelService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return routes', () => {
       const routes = service.getRoutes();

       expect(routes).toBeTruthy();
    });
});
