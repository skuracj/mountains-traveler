export interface Story {
    storyId: string;
    timestamp: string;
    picture: string;
    title: string;
    description: string;
    likes: string[];
}

export interface UserStory {
    userId: string;
    userName: string;
    details: Story;
}