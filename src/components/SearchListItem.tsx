import React from "react";
import SearchIcon from "../assets/icons/search-icon.svg";
import WithLogging from "../components/WithLogging";

interface SearchListItemProps {
  name: string;
  handlerFunction: (name: string) => void;
}

const SearchListItem: React.FC<SearchListItemProps> = ({ name, handlerFunction }) => {
  return (
    <li className="cursor-pointer"  onClick={() => handlerFunction(name)}>
      <div className="flex items-center space-x-2">
        <img alt="User" src={SearchIcon} width={24} height={24} /> <div>{name}</div>
      </div>
    </li>
  );
};

export default WithLogging(SearchListItem, "SearchListItem");
