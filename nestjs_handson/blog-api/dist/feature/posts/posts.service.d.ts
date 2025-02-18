import { PostType } from './post.interface';
export declare class PostsService {
    private readonly posts;
    finaAll(): PostType[];
    create(post: PostType): void;
}
