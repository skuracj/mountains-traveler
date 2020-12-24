import {UserRelations} from '../../models/relation';

export const usersRelationsMock: UserRelations[] = [
    {
        userId: 'aw3s0m-3eb7-4d1a-8d8f-612f7083839c',
        userName: 'Cezary Lolek',
        relations: [{
            imageId: 'fd2edb60-3eb7-4d1a-8d8f-612f7083839c',
            timestamp: 1607273204,
            picture: '/assets/soldier.jpeg',
            title: 'Hala Gasienicowa',
            description: 'Mountains always good...',
            likes: ['fd2edb60-3eb7-4d1a-8d8f-612f7083839c', 'f96b6ac5-1ea9-429e-aa1b-c499783f0611']
        }],
    },
    {
        userId: 'aw3s0m-3eb7-4d1a-8d8f-612aasdw39c',
        userName: 'Anulka Pyzulka',
        relations: [{
            imageId: 'aa22b60-3eb7-4d1a-8d8f-612f708fs',
            timestamp: 1603173204,
            picture: '/assets/anulka.png',
            title: 'Polana Rusionowa',
            description: 'Keep close to Nature\'s heart... and break clear away, once in awhile,\n' +
                '    and climb a mountain or spend a week in the woods. Wash your spirit clean.',
            likes: ['f96b6ac5-1ea9-429e-aa1b-c499783f0611']
        }],
    },
    {
        userId: 'aw3s0m-412ds-9jfs-8d8f-6dssss9c',
        userName: 'Mudzina Bombata',
        relations: [{
            imageId: 'fd2edb60-3eb7-4d1a-8d8f-612dsa83839c',
            timestamp: 1601173204,
            picture: '/assets/mountain.jpg',
            title: 'Mattern Horn',
            description: 'Find your peace...',
            likes: []
        }],
    }
];
