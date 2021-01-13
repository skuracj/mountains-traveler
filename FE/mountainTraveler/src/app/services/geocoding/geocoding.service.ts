import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GeoCoordinates} from '../../common/models/coordinates';

export abstract class BaseGeocodingService {
    API_KEY: string;
    abstract async getLocation(coordinates: GeoCoordinates): Promise<string>;
}

@Injectable()
export class GeocodingService {
    API_KEY = 'f973adcfbc7e4e15a7b95cee1f6f9d8f';

    constructor(private httpClient: HttpClient) {
    }

    async getLocation({lat, lng}: GeoCoordinates): Promise<string> {
        let res: any;
        try {
            console.log('calll');
            res = await this.httpClient
                .get<any>(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${this.API_KEY}`).toPromise();
        } catch (e) {
            console.error(e);
        }

        return res.results[0].formatted.split(',')[0];
    }
}




