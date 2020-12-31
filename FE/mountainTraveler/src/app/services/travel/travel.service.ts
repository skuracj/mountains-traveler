import { Injectable } from '@angular/core';

export abstract class BaseTravelService {
  abstract getRoutes();
}

@Injectable()
export class TravelService {

  constructor() { }

  getRoutes() {
    return {};
  }
}
