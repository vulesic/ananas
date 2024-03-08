import React from "react";
import SearchIconWhite from "../assets/icons/search-icon-white.svg";
import WithLogging from "../components/WithLogging";

interface SearchPropsIC {
  searchTerm: string;
  handlerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchPropsIC> = ({ searchTerm, handlerChange }) => {
  return (
    <div className="relative">
      <input
        className="border border-gray-400 rounded-3xl py-3 px-11 w-full mb-8 bg-[#f6f6f6] text-black font-bold focus:border-orange-500 focus:shadow-outline-orange focus:outline-none"
        type="text"
        placeholder="Search by user"
        value={searchTerm}
        onChange={handlerChange}
      />
      <div className="absolute top-[1px] right-0 bg-orange-500 rounded-full p-3">
        <img className="w-6 h-6" alt="User" src={SearchIconWhite} />
      </div>
    </div>
  );
};

export default WithLogging(Search, "Search");
