import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../Hook/useFetch";
import { useTodos } from "../context/TodoContext";
const SearchInput = () => {
  const { refetch } = useTodos();
  const [userInput, setUserInput] = useState("");
  const endpoint = import.meta.env.VITE_API_BASE_URL;

  const handlePost = async (todo) => {
    try {
      const res = await fetch(`${endpoint}/api/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: todo,
          completed: false,
        }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      await res.json();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!handleInputValidation(userInput)) {
        toast.error("Please input a title");
        return;
      }
      handlePost(userInput);
      toast.success("Successfully added a task!");
      setUserInput("");
    }
  };
  const handleInputValidation = (input) => {
    if (!input.trim()) {
      return false;
    }
    return true;
  };

  return (
    <>
      <input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleEnter}
        type="text"
        className="w-full  bg-gray-50 placeholder-neutral-500 text-black py-2 px-3 rounded-md 
                 ring-1 ring-transparent focus:ring-2 focus:ring-accent 
                 focus:outline-none transition duration-200"
        placeholder="What needs to be done?"
      />
    </>
  );
};

export default SearchInput;
