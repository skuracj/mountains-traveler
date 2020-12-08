export const weatherApiResponseMock = {
    city: {
        id: 3080866,
        name: 'Zakopane',
        coord: {lon: 19.9489, lat: 49.299},
        country: 'PL',
        population: 27580,
        timezone: 3600
    },
    cod: '200',
    message: 0.0345202,
    cnt: 5,
    list: [{
        dt: 1605434400,
        sunrise: 1605419472,
        sunset: 1605452325,
        temp: {day: 9.3, min: 4.2, max: 9.3, night: 4.2, eve: 5.39, morn: 4.73},
        feels_like: {day: 7.34, night: 0.57, eve: 2.61, morn: 2.17},
        pressure: 1024,
        humidity: 70,
        rain: 2,
        weather: [{id: 800, main: 'Clear', description: 'sky is clear', icon: '01d'}],
        speed: 0.95,
        deg: 197,
        clouds: 3,
        pop: 0
    }]
};
