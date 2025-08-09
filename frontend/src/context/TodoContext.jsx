import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../Hook/useFetch";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const { data: todos, loading, error } = useFetch(`${API_BASE_URL}/api/todos`);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <TodoContext.Provider
      value={{ todos, loading, error, activeTab, setActiveTab }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
