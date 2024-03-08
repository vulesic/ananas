import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import WithLogging from "../components/WithLogging";
import UserIcon from "../assets/icons/user-icon.svg";
import { CommentIC } from "../interfaces/interfaces";
import CommentItem from "../components/CommentItem";
import NavigateTo from "../components/NavigateTo";
import BackButton from "../components/BackButton";

const getPostComments = (comments: CommentIC[], id: number) => {
  return comments.filter((comment) => comment.postId === id);
};

const Post: React.FC = () => {
  const { posts, users, comments } = useGlobalState();
  const { id } = useParams<{ id?: string }>();
  const postId = id ? parseInt(id, 10) : undefined;

  if (postId === undefined || isNaN(postId)) {
    return <NavigateTo path={'/'} />;
  }
  const postComments = getPostComments(comments, postId);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return <NavigateTo path={'/'} />;
  }

  const userName = users.find((user) => user.id === post.userId)?.name ?? "Unknown";

  return (
    <div className="container mx-auto mb-5">
      <BackButton path={"/posts"} />
      <div className="mt-5 p-4 bg-slate-700 text-white">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm mt-3 mb-2">{post.body}</p>
        <div className="flex justify-between items-end">
          <div className="flex items-center space-x-3 text-sm">
            <img alt="User" src={UserIcon} width={40} height={40} />{" "}
            <div className="flex flex-col">
              <p className="text-sm font-bold">Author</p>
              <p className="text-sm text-[#fe4f2a]">{userName}</p>
            </div>
          </div>
        </div>
      </div>

      {postComments && postComments.length && (
        <>
          <h2 className="text-2xl mt-3 mb-2">Comments</h2>
          <div className="grid gap-3">
            {postComments.map((comment) => (
              <CommentItem key={comment.postId} comment={comment} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default WithLogging(Post, "Post");
