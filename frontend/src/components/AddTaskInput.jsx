import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useFetch from "../Hook/useFetch";
import { useTodos } from "../context/TodoContext";
import { handlePost } from "../services/todoService";
const SearchInput = () => {
  const { refetch } = useTodos();
  const [userInput, setUserInput] = useState("");

  const handleEnter = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!handleInputValidation(userInput)) {
        toast.error("Please input a title", {
          toastId: "failed-task-add",
        });
        return;
      }
      await handlePost(userInput, refetch);
      toast.success("Successfully added a task!", {
        toastId: "success-task-add",
      });
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
