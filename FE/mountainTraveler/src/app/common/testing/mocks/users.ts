import {User} from '../../models/user';
import {uuid4} from '@capacitor/core/dist/esm/util';

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
        stories: [{
            storyId: uuid4(),
            timestamp: new Date(1608901196 * 1000).toLocaleString(),
            picture: '/assets/soldier.jpeg',
            title: 'Hala Gasienicowa',
            description: 'Mountains always good...',
            likes: ['anulka1_ID', 'mudzina1_ID']
        }],
        friendsIds: ['', 'mudzina1_ID'],
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
        stories: [{
            storyId: uuid4(),
            timestamp: new Date(1608101196 * 1000).toLocaleString(),
            picture: '/assets/anulka.png',
            title: 'Polana Rusionowa',
            description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n' +
                '    and climb a mountain or spend a week in the woods. Wash your spirit clean.',
            likes: ['loggedInUser_ID']
        }],
        friendsIds: ['anulka1_ID', 'mudzina1_ID'],
    },
    {
        userId: 'mudzina1_ID',
        name: 'Mudzina Bombata',
        profilePicture: '/assets/users-pictures/2.png',
        isPublic: true,
        age: 31,
        location: 'Zurich, Switzerland',
        totalDistance: 3234,
        trips: 31,
        timeInMinutes: 32850,
        stories: [{
            storyId: uuid4(),
            timestamp: new Date(1600111196 * 1000).toLocaleString(),
            picture: '/assets/mountain.jpg',
            title: 'Mattern Horn',
            description: 'Find your peace...',
            likes: []
        }],
        friendsIds: ['anulka1_ID'],
    }
];
