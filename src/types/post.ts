export interface Timestamps {
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ImageObj {
    url: string,
    publicId: string
}

export interface Post extends Timestamps {
    id?: string; 
    userId?: string,
    title: string;
    content?: string | Array<ImageObj>;
    description: string;
}

