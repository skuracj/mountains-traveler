'use strict';

module.exports.main = async (event) => {
    const resolvedRoutes = await Promise.all(await getAllRoutes());

    return {
        statusCode: 200,
        body: JSON.stringify(
            resolvedRoutes,
            null,
            2
        ),
    };
};


async function getAllRoutes() {
    let routes;
    try {
        routes = await routesMock.map(async route => {
            const {lat, lng} = route.startingPoint;
            let locationName;

            try {
                locationName = await getLocation({lat, lng});

            } catch (e) {
                console.error(e);
            }
            route.startingPoint.formattedName = locationName;
            return route;
        });
    } catch (e) {

    }
    return routes;
}

const http = require('http');

async function getLocation({lat, lng}) {
    // TODO move to secret manager
    const API_KEY = 'f973adcfbc7e4e15a7b95cee1f6f9d8f';

    var options = {
        'method': 'GET',
        'hostname': 'api.opencagedata.com',
        'path': `/geocode/v1/json?q=${lat}+${lng}&key=f973adcfbc7e4e15a7b95cee1f6f9d8f`,
        'headers': {},
        'maxRedirects': 20
    };

    const response = await new Promise((resolve, reject) => {
        var req = http.get(options,
            function (res) {
                var chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function (chunk) {
                    var body = Buffer.concat(chunks);
                    resolve(JSON.parse(body.toString()).results[0].formatted);
                });

                res.on("error", function (error) {
                    console.error(error);
                });
            });
    });
    return response;
}


const routesMock = [
    {
        routeId: '9938d01f-5cf1-4078-b5b1-2501df4ea1c6',
        startingPoint: {
            lat: '49.2693317',
            lng: '19.9770293',
            formattedName: ''
        },
        distance: 12,
        uphill: 2301,
        hikingLevel: 'easy',
        routeType: 'roundTrip',
        suitableForKids: true,
        tripDuration: {
            displayValue: 'short',
            hours: 4.5
        },
        usersRatings: 5
    },
    {
        routeId: '6b4caaf5-f612-470d-bd14-2fbeefd23969',
        startingPoint: {
            lat: '49.2736375',
            lng: '19.9491093',
            formattedName: ''
        },
        distance: 21,
        uphill: 2601,
        destinationPoint: '49.2740186,19.9488565',
        hikingLevel: 'medium',
        routeType: 'oneWay',
        suitableForKids: false,
        tripDuration: {
            displayValue: 'medium',
            hours: 5
        },
        usersRatings: 4
    },
    {
        routeId: 'c3cd409a-1c0c-4f60-a302-dbffe7ef100f',
        startingPoint: {
            lat: '49.2550075',
            lng: '20.1007657',
            formattedName: ''
        },
        distance: 32,
        uphill: 3101,
        hikingLevel: 'hard',
        routeType: 'roundTrip',
        suitableForKids: false,
        tripDuration: {
            displayValue: 'long',
            hours: 11.5
        },
        usersRatings: 3
    }];
