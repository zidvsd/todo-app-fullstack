import React from "react";

const SearchInput = () => {
  return (
    <input
      type="text"
      className="w-full md:max-w-md placeholder-neutral-500 text-black py-2 px-3 rounded-md 
                 ring-1 ring-transparent focus:ring-2 focus:ring-accent 
                 focus:outline-none transition duration-200"
      placeholder="What needs to be done?"
    />
  );
};

export default SearchInput;
