import { User } from '@/entities/user1';

export interface CommentType {
    id: string;
    text: string;
    user: User;
}
