export interface User {
    userId: string;
    name: string;
    profilePicture: string;
    totalDistance: number;
    trips: number;
    relations: Relations[];
    timeInMinutes: number;
    friendsIds: string[];
}

export interface Relations {
    timestamp: number;
    picture: string;
    title: string;
    description: string;
    likes: string[];
}