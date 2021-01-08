import {Story} from '../../models/story';

export const storiesMock: Story[] = [
    {
        storyId: 'b07c3896-3b17-4689-86ef-4bc6ec25ef15',
        userId: 'loggedInUser_ID',
        userName: 'Cezary Lolek',
        profilePicture: '/assets/soldier.jpeg',
        timestamp: new Date(1608901196 * 1000).toLocaleString(),
        picture: '/assets/soldier.jpeg',
        title: 'Orla perc',
        description: 'Mountains always good...',
        likes: ['anulka1_ID', 'mudzina1_ID', 'loggedInUser_ID']
    },
    {
        storyId: '4ab0f3ff-6212-4fec-b1e9-4523b6cb8591',
        userId: 'anulka1_ID',
        userName: 'Anulka Pyzulka',
        profilePicture: '/assets/users-pictures/1.png',
        timestamp: new Date(1608901196 * 1000).toLocaleString(),
        picture: '/assets/map_mock.png',
        title: 'Hala Gasienicowa',
        description: 'Mountains always good...',
        likes: ['anulka1_ID', 'mudzina1_ID']
    },
    {
        storyId: '2a71e2a2-e020-489f-9741-eb6646a7a1cd',
        userId: 'anulka1_ID',
        userName: 'Anulka Pyzulka',
        profilePicture: '/assets/users-pictures/1.png',
        timestamp: new Date(1608101196 * 1000).toLocaleString(),
        picture: '/assets/anulka.png',
        title: 'Polana Rusionowa',
        description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n' +
            '    and climb a mountain or spend a week in the woods. Wash your spirit clean.',
        likes: ['loggedInUser_ID']
    },
    {
        storyId: 'b650707e-3068-41e9-a16d-5f3afad44bee',
        userId: 'mudzina1_ID',
        userName: 'Mudzina Bombata',
        profilePicture: '/assets/users-pictures/2.png',
        timestamp: new Date(1600111196 * 1000).toLocaleString(),
        picture: '/assets/mountain.jpg',
        title: 'Mattern Horn',
        description: 'Find your peace...',
        likes: []
    }
];
