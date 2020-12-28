import {User} from '../../models/user';
import {uuid4} from '@capacitor/core/dist/esm/util';

export const userMock: User = {
    userId: 'loggedInUser_ID',
    name: 'Cezary Lolek',
    profilePicture: '/assets/soldier.jpeg',
    isPublic: true,
    age: 28,
    location: 'Amsterdam, Netherlands',
    totalDistance: 1234,
    trips: 15,
    timeInMinutes: 8850,
    stories: [
        {
            storyId: uuid4(),
            timestamp: new Date(1608901196 * 1000).toLocaleString(),
            picture: '/assets/soldier.jpeg',
            title: 'Hala Gasienicowa',
            description: 'Mountains always good...',
            likes: ['anulka1_ID', 'mudzina1_ID']
        },
        {
            storyId: uuid4(),
            timestamp: new Date(1608901196 * 1000).toLocaleString(),
            picture: '/assets/anulka.png',
            title: 'Hala Gasienicowa',
            description: 'Mountains always good...',
            likes: ['anulka1_ID', 'mudzina1_ID']
        }
    ],
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
};
