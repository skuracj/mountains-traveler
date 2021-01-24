import {User} from '../../models/user';

export const usersMock: User[] = [
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
    {
        userId: 'anulka1_ID',
        name: 'Anulka Pyzulka',
        profilePicture: '/assets/users-pictures/1.png',
        isPublic: true,
        age: 24,
        location: 'Warsaw, Poland',
        totalDistance: 234,
        trips: 3,
        timeInMinutes: 850,
        stories: ['4ab0f3ff-6212-4fec-b1e9-4523b6cb8591', '2a71e2a2-e020-489f-9741-eb6646a7a1cd'],
        friendsIds: ['anulka1_ID', 'mudzina1_ID'],
    },
    {
        userId: 'mudzina1_ID',
        name: 'Mudzina Bombata',
        profilePicture: '/assets/users-pictures/3.png',
        isPublic: true,
        age: 31,
        location: 'Zurich, Switzerland',
        totalDistance: 3234,
        trips: 31,
        timeInMinutes: 32850,
        stories: ['b650707e-3068-41e9-a16d-5f3afad44bee'],
        friendsIds: ['anulka1_ID'],
    }
];
