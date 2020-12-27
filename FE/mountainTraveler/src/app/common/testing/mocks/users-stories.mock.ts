import {UserStory} from '../../models/story';
import {uuid4} from '@capacitor/core/dist/esm/util';


export const usersStoriesMock: UserStory[] = [
    {
        userId: 'loggedInUser_ID',
        userName: 'Cezary Lolek',
        details: {
            storyId: uuid4(),
            timestamp: new Date(1608901196 * 1000).toLocaleString(),
            picture: '/assets/soldier.jpeg',
            title: 'Hala Gasienicowa',
            description: 'Mountains always good...',
            likes: ['anulka1_ID', 'mudzina1_ID']
        },
    },
    {
        userId: 'anulka1_ID',
        userName: 'Anulka Pyzulka',
        details: {
            storyId: uuid4(),
            timestamp: new Date(1608101196 * 1000).toLocaleString(),
            picture: '/assets/anulka.png',
            title: 'Polana Rusionowa',
            description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n' +
                '    and climb a mountain or spend a week in the woods. Wash your spirit clean.',
            likes: ['loggedInUser_ID']
        },
    },
    {
        userId: 'mudzina1_ID',
        userName: 'Mudzina Bombata',
        details: {
            storyId: uuid4(),
            timestamp: new Date(1600111196 * 1000).toLocaleString(),
            picture: '/assets/mountain.jpg',
            title: 'Mattern Horn',
            description: 'Find your peace...',
            likes: []
        },
    }
];
