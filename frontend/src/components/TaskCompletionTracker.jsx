import React from "react";
import { useTodos } from "../context/TodoContext";
const TaskCompletionTracker = () => {
  const { todos, loading, error } = useTodos();
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;
  return (
    <div className="text-center mt-4">
      <p className="text-neutral-300">
        {completedTasks} of {totalTasks} completed
      </p>
    </div>
  );
};

export default TaskCompletionTracker;
