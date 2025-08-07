import React from "react";
import useFetch from "./Hook/useFetch";
import AddTask from "./components/AddTask";
import SearchInput from "./components/SearchInput";
import TodoStates from "./components/TodoStates";
import FilterTabs from "./components/FilterTabs";
const App = () => {
  const { data, error, fetchData, loading } = useFetch(
    "http://localhost:8000/api/todos"
  );

  return (
    <div className="flex flex-col items-center justify-center container mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl text-primary  font-bold">My Tasks</h1>
        <p className="text-neutral-500">Stay organized and get things done</p>
      </div>

      <div className="justify-center flex flex-row gap-x-2 items-center w-full mt-12">
        <SearchInput />
        <AddTask />
      </div>

      <div className="flex flex-col gap-x-4 md:flex-row w-full my-4 md:items-center justify-center  lg:max-w-xl lg:justify-start lg:items-center">
        <TodoStates />
        <FilterTabs />
      </div>

      <h1 className="my-4  text-xl font-bold">Data</h1>
      {loading && <p className="text-yellow-300">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <section className="text-black mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((todos, index) => (
          <div className="" key={index}>
            {todos.title}{" "}
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
