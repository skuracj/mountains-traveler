import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RoutesService} from './routes.service';
import {HttpClientTestingModule, HttpTestingController, TestRequest} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';
import {routesMock} from '../../common/testing/mocks/routes.mock';

describe('RoutesService', () => {
    let service: RoutesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RoutesService]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(RoutesService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#getRoutes', () => {
        let req: TestRequest;
        const routesResponse = routesMock;
        const endpointUrl = `${environment.baseUrl}/dev/routes`;

        beforeEach(() => {
            service.getRoutes();

            req = httpTestingController.expectOne(endpointUrl);
        });

        it('should make http request', () => {
            expect(req.request.method).toEqual('GET');
        });


        it('should emit routes', fakeAsync(() => {
            req.flush(routesResponse);
            tick(100);

            service.routes$.subscribe(stories => {
                tick(100);
                expect(stories).toEqual(routesResponse);
            });
        }));
    });
});
