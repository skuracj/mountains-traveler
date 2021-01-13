import {TestBed} from '@angular/core/testing';

import {GeocodingService} from './geocoding.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GeoCoordinates} from '../../common/models/coordinates';

describe('GeocodingService', () => {
    let service: GeocodingService;
    let httpMock: HttpTestingController;
    const apiKey = 'someApiKey';
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GeocodingService]
        });
        service = TestBed.inject(GeocodingService);
        httpMock = TestBed.inject(HttpTestingController);
        service.API_KEY = apiKey;
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getLocation', () => {
        const coords: GeoCoordinates = {lat: '2121', lng: '212'};

// TODO finish tests
        it('should make get request ', () => {
            service.getLocation(coords);

            const req = httpMock.expectOne(`https://api.opencagedata.com/geocode/v1/json?q=${coords.lat}+${coords.lng}&key=${apiKey}`);
            expect(req.request.method).toBe('GET');
            req.flush('');
        });

        // it('should return string location', async () => {
        //     let expectedString: string;
        //
        //     // expectedString = await service.getLocation(coords);
        //     expect();
        // });
    });
});
