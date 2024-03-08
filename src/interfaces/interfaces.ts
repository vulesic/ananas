export interface UserIC {
  id: number;
  name: string;
  username: string;
}

export interface PostIC {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CommentIC {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface GlobalStateIC {
  users: UserIC[];
  posts: PostIC[];
  comments: CommentIC[];
}