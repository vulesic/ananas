import React from "react";
import WithLogging from "../components/WithLogging";

interface LoadMoreIC {
  loadMorePosts: () => void;
}

const LoadMore: React.FC<LoadMoreIC> = ({loadMorePosts}) => {
  return (
    <div className="w-full py-6 text-center">
      <button
        className="mt-4 py-2 px-4 text-white bg-orange-500 rounded-md border uppercase text-sm"
        onClick={loadMorePosts}
      >
        Show More
      </button>
    </div>
  );
};

export default WithLogging(LoadMore, "LoadMore");
