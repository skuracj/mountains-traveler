import {Relations} from './relations';
import {PackingItem} from './packing-list';

export interface User {
    userId: string;
    isPublic: true;
    name: string;
    profilePicture: string;
    age: number;
    location: string;
    totalDistance: number;
    trips: number;
    relations: Relations[];
    timeInMinutes: number;
    friendsIds: string[];
    packingList: PackingItem[];
}

