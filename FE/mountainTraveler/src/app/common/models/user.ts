import {Relations} from './relations';

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
}

