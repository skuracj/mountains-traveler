export interface Relation {
    imageId: string;
    timestamp: number;
    picture: string;
    title: string;
    description: string;
    likes: string[];
}

export interface UserRelations {
    userId: string;
    userName: string;
    relations: Relation[];
}