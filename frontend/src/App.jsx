import React from "react";
import AddTaskButton from "./components/AddTaskButton";
import { useTodos } from "./context/TodoContext";
import AddTaskInput from "./components/AddTaskInput";
import TodoStates from "./components/TodoStates";
import FilterTabs from "./components/FilterTabs";
import TaskLists from "./components/TaskLists";
import TaskCompletionTracker from "./components/TaskCompletionTracker";
const App = () => {
  const { todos, loading, error } = useTodos();

  return (
    <div className="flex flex-col items-center justif y-center container mx-auto my-4 px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl text-primary  font-extrabold">My Tasks</h1>
        <p className="text-neutral-500">Stay organized and get things done</p>
      </div>

      <div className="justify-center flex flex-row gap-x-2 items-center w-full mt-8 max-w-3xl border border-gray-200 px-6 py-4 rounded-lg shadow-xl">
        <AddTaskInput />
        <AddTaskButton />
      </div>

      <div className="flex flex-col gap-y-2 md:flex-row w-full my-4 md:items-center justify-center  lg:max-w-3xl lg:justify-start lg:items-center">
        <TodoStates />
        <FilterTabs />
      </div>

      <TaskLists />

      <TaskCompletionTracker />
    </div>
  );
};

export default App;
