import React from "react";
import { CommentIC } from "../interfaces/interfaces";
import MailIcon from "../assets/icons/mail-icon.svg";

const CommentItem: React.FC<{ comment: CommentIC }> = ({ comment }) => {
  return (
    <div className="CommentItem bg-slate-100 border rounded-xl py-6 px-4">
      <div className="flex items-center mt-3 space-x-2 text-xs">
        <img alt="User" src={MailIcon} width={20} height={20} />
        <p>{comment.email}</p>
      </div>
      <h4 className="text-xl mb-3">{comment.name}</h4>
      <p className="text-sm">{comment.body}</p>
    </div>
  );
};

export default CommentItem;
