export interface Post {
  _id: number;
  name: string;
  description: string;
  content: string;
  avatarImg: string;
  title: string;
  image: string;
  comments: string[];
  authorId: number;
  likes: number;
  createdAt: string;
  tags: string[];
}
