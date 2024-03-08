import React from "react";
import LeftArrow from "../assets/icons/LeftArrow.svg";
import { Link } from "react-router-dom";
import WithLogging from "./WithLogging";

const BackButton: React.FC<{ path: string }> = ({ path }) => {
  return (
    <Link to={path} className="w-24 mt-4 py-2 pl-2 pr-4 text-white bg-orange-500 rounded-md border uppercase text-sm flex items-center space-x-2">
      <img src={LeftArrow} alt="Back to posts" width={18} height={18} />
      <span>Posts</span>
    </Link>
  );
};

export default WithLogging(BackButton, "BackButton");
