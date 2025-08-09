import React from "react";
import AddTask from "./components/AddTask";
import { useTodos } from "./context/TodoContext";
import SearchInput from "./components/SearchInput";
import TodoStates from "./components/TodoStates";
import FilterTabs from "./components/FilterTabs";
import TaskLists from "./components/TaskLists";
import TaskCompletionTracker from "./components/TaskCompletionTracker";
const App = () => {
  const { todos, loading, error } = useTodos();

  return (
    <div className="flex flex-col items-center justif y-center container mx-auto my-12 px-4">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl text-primary  font-extrabold">My Tasks</h1>
        <p className="text-neutral-500">Stay organized and get things done</p>
      </div>

      <div className="justify-center flex flex-row gap-x-2 items-center w-full mt-12 max-w-3xl border border-gray-200 px-6 py-4 rounded-lg shadow-xl">
        <SearchInput />
        <AddTask />
      </div>

      <div className="flex flex-col gap-x-4 md:flex-row w-full my-4 md:items-center justify-center  lg:max-w-3xl lg:justify-start lg:items-center">
        <TodoStates />
        <FilterTabs />
      </div>

      <TaskLists />

      <TaskCompletionTracker />
    </div>
  );
};

export default App;
