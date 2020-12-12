import {Relations} from './relations';
import {PackingItem} from './packing-list';

export interface User {
    userId: string;
    name: string;
    profilePicture: string;
    location: string;
    totalDistance: number;
    trips: number;
    relations: Relations[];
    timeInMinutes: number;
    friendsIds: string[];
    packingList: PackingItem[];
}

