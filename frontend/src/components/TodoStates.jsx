import React, { use } from "react";
import { useTodos } from "../context/TodoContext";
const TodoStates = () => {
  const { todos, loading, error } = useTodos();
  if (loading || !todos || todos.length === 0) {
    return <p>Loading...</p>;
  }

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="flex flex-row font-bold text-primary gap-x-4 mr-auto my-2">
      <p className="rounded-full px-3 py-1 bg-accent opacity-80 text-white">
        {activeCount} active
      </p>
      <p className="rounded-full px-3 py-1 border-gray-300 border opacity-80">
        {completedCount} completed
      </p>
    </div>
  );
};

export default TodoStates;
