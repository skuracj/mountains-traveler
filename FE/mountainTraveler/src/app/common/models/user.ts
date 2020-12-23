import {Relation} from './relation';
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
    relations: Relation[];
    timeInMinutes: number;
    friendsIds: string[];
    packingList: PackingItem[];
}

