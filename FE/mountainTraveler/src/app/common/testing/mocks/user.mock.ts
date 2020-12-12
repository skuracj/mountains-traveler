import {User} from '../../models/user';

export const userMock: User = {
    userId: 'aw3s0m-3eb7-4d1a-8d8f-612f7083839c',
    name: 'Cezary Lolek',
    profilePicture: 'somepath',
    location: 'Amsterdam, Netherlands',
    totalDistance: 1234,
    trips: 15,
    timeInMinutes: 8850,

    relations: [{
        timestamp: 1607273204,
        picture: '/assets/soldier.jpeg',
        title: 'Hala Gasienicowa',
        description: 'Mountains always good...',
        likes: ['fd2edb60-3eb7-4d1a-8d8f-612f7083839c', 'f96b6ac5-1ea9-429e-aa1b-c499783f0611']
    }],
    friendsIds: ['fd2edb60-3eb7-4d1a-8d8f-612f7083839c', 'f96b6ac5-1ea9-429e-aa1b-c499783f0611', '81ae9139-c7d8-4ad7-93ad-c9eca51ff7a7', 'e1ed9719-cb51-4c83-b438-503c11f880db', '2e2c6714-8495-4da5-b9ed-7a17f7a825d4'],
    packingList: [
        {
            title: 'Backpack',
            packed: true
        },
        {
            title: 'Bottle',
            packed: false
        }]
};
