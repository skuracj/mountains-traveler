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
        const address = 'some address';
        let req;
        let location: Promise<string>;

        beforeEach(() => {
            location = service.getLocation(coords);
            req = httpMock.expectOne(`https://api.opencagedata.com/geocode/v1/json?q=${coords.lat}+${coords.lng}&key=${apiKey}`);
            req.flush({results: [{formatted: `${address}`}]});
        });

        it('should make get request ', () => {
            expect(req.request.method).toBe('GET');
        });

        it('should return string location', (done) => {
            location
                .then(response => expect(response).toBe(address))
                .then(done);
        });
    });
});
