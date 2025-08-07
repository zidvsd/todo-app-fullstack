import React from "react";
import { useState } from "react";
const TodoStates = () => {
  return (
    <div className="flex flex-row space-x-4 font-bold text-primary gap-x-8 mr-auto">
      <p>0 active</p>
      <p>0 completed</p>
    </div>
  );
};

export default TodoStates;
