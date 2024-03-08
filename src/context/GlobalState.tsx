import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { GlobalStateIC } from "../interfaces/interfaces";

const initialState: GlobalStateIC = {
  users: [],
  posts: [],
  comments: [],
};

const GlobalStateContext = createContext(initialState);

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GlobalStateIC>(initialState);
  const apiUrl = "https://jsonplaceholder.typicode.com";
  useEffect(() => {
    const fetchData = async () => {
      const usersResponse = await fetch(`${apiUrl}/users`);
      const usersData = await usersResponse.json();

      const postsResponse = await fetch(`${apiUrl}/posts`);
      const postsData = await postsResponse.json();

      const commentsResponse = await fetch(`${apiUrl}/comments`);
      const commentsData = await commentsResponse.json();

      setState({ users: usersData, posts: postsData, comments: commentsData });
    };

    fetchData();
  }, []);

  return <GlobalStateContext.Provider value={state}>{children}</GlobalStateContext.Provider>;
};
