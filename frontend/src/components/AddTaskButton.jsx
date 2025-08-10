import React from "react";

const AddTaskButton = () => {
  return (
    <div className="text-white bg-accent space-x-4 px-8 py-2 flex flex-row rounded-md cursor-pointer hover-utility hover:opacity-70">
      <p className="text-xl">+</p>
      <p>Add</p>
    </div>
  );
};

export default AddTaskButton;
