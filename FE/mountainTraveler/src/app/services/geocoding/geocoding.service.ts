import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GeoCoordinates} from '../../common/models/coordinates';

export abstract class BaseGeocodingService {
    abstract getLocation(coordinates: GeoCoordinates);
}

@Injectable()
export class GeocodingService {
    private API_KEY = 'f973adcfbc7e4e15a7b95cee1f6f9d8f';
    constructor(private httpClient: HttpClient) {
    }

    getLocation({lat, lng}: GeoCoordinates): Observable<any> {
        return this.httpClient.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.API_KEY}`);
    }
}




