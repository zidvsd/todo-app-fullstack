import React from "react";
import { useState } from "react";
const SearchInput = () => {
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
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handlePost(userInput);
      setUserInput("");
    }
  };
  return (
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
  );
};

export default SearchInput;
