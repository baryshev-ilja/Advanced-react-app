import { User } from '@/entities/user';

export interface CommentType {
    id: string;
    text: string;
    user: User;
}
