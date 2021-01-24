'use strict';

module.exports.main = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                userId: 'loggedInUser_ID',
                name: 'Cezary Lolek',
                profilePicture: '/assets/soldier.jpeg',
                isPublic: true,
                age: 28,
                location: 'Amsterdam, Netherlands',
                totalDistance: 1234,
                trips: 15,
                timeInMinutes: 8850,
                stories: ['b07c3896-3b17-4689-86ef-4bc6ec25ef15'],
                friendsIds: ['anulka1_ID', 'mudzina1_ID'],
                packingList: [
                    {
                        title: 'Backpack',
                        packed: true
                    },
                    {
                        title: 'Backpack',
                        packed: true
                    },
                    {
                        title: 'Bottle',
                        packed: false
                    }]
            },
            null,
            2
        ),
    };

};
