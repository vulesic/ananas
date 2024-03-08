import React from "react";
import { PostIC, CommentIC } from "../interfaces/interfaces";
import UserIcon from "../assets/icons/user-icon.svg";
import { useGlobalState } from "../context/GlobalState";
import WithLogging from "../components/WithLogging";

const countComments = (comments: CommentIC[], id: number) => {
  return comments?.filter((comment) => comment.postId === id).length;
};

interface PostListItemProps {
  post: PostIC;
  onPostClick: (id: number) => void; 
}

const PostListItem: React.FC<PostListItemProps> = ({ post, onPostClick }) => {
  const { users, comments } = useGlobalState();
  const commentCount = countComments(comments, post.id);

  return (
    <div
      className="post-item border rounded-xl border-slate-600 px-4 py-6  bg-slate-700 text-white grid cursor-pointer"
      key={post.id}
      onClick={() => {
        onPostClick(post.id);
      }}
    >
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-sm mt-3 mb-2">{post.body}</p>
      <div className="flex justify-between items-end">
        <div className="flex items-center space-x-3 text-sm">
          <img alt="User" src={UserIcon} width={40} height={40} />{" "}
          <div className="flex flex-col">
            <p className="text-sm font-bold">Author</p>
            <p className="text-sm text-[#fe4f2a]">{users.find((user) => user.id === post.userId)?.name}</p>
          </div>
        </div>
        <div className="text-sm">Comments {commentCount}</div>
      </div>
    </div>
  );
};

export default WithLogging(PostListItem, "PostListItem");
