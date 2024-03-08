import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import WithLogging from "../components/WithLogging";
import PostListItem from "../components/PostListItem";
import SearchListItem from "../components/SearchListItem";
import Search from "../components/Search";
import LoadMore from "../components/LoadMore";
import { useNavigate } from "react-router-dom";

const Posts: React.FC = () => {
  const { posts, users } = useGlobalState();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [numPosts, setNumPosts] = useState(6);
  const userNames = users.map((user) => user.name.toLowerCase());
  const navigate = useNavigate();

  const filteredPosts = posts.filter((post) => {
    const user = users.find((user) => user.id === post.userId);
    return user?.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const loadMorePosts = () => {
    setNumPosts((prevNumPosts) => prevNumPosts + 6);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredSuggestions = userNames.filter((name) => name.toLowerCase().includes(value));
    setSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name: string) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="Posts container px-3 md:px-0 mx-auto py-8" data-testid="posts">
      <div className="bg-white relative">
        <Search searchTerm={searchTerm} handlerChange={handleSearchChange}/>
        {suggestions.length > 0 && showSuggestions && (
          <ul className="absolute top-[50px] bg-white w-full rounded shadow z-10 px-4 py-5 text-lg font-bold space-y-2 rounded-tl-3xl rounded-tr-3xl">
            <li className="text-end absolute right-0 top-0 cursor-pointer">
              {showSuggestions && (
                <button className="text-sm p-3 text-blue-800 font-normal" onClick={handleClearSearch}>
                  Odustani od pretrage
                </button>
              )}
            </li>
            {suggestions.map((name, index) => (
              <SearchListItem key={index} name={name} handlerFunction={handleSuggestionClick} />
            ))}
          </ul>
        )}
      </div>

      {!filteredPosts?.length && <div className="text-center font-bold ">No post for criteria :(</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.slice(0, numPosts).map((post) => (
          <PostListItem key={post.id} post={post} onPostClick={handlePostClick}/>
        ))}
      </div>

      {numPosts < filteredPosts.length && <LoadMore loadMorePosts={loadMorePosts} />}
    </div>
  );
};

export default WithLogging(Posts, "Posts");
