import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { formattedDateToMMDDYY } from "../utils/utils";
import { useMemo } from "react";
const TaskLists = () => {
  const { todos, error, loading, activeTab } = useTodos();
  const [checkedStates, setCheckedStates] = useState({}); // store checked state per todo

  const toggleCheck = (id) => {
    setCheckedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const displayAllTodos = todos;
  const displayCompletedTodos = todos.filter((todo) => todo.completed);
  const displayUncompletedTodos = todos.filter((todo) => !todo.completed);

  const filteredTodos = useMemo(() => {
    switch (activeTab) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "active":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos; // All
    }
  }, [todos, activeTab]);
  return (
    <>
      {loading && <p className="text-yellow-300">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <section className="text-black mt-2 grid grid-cols-1 w-full gap-4 place-items-center max-w-3xl">
        {filteredTodos.map((todo) => {
          const isChecked = checkedStates[todo._id] || false;

          return (
            <div
              className="border border-gray-200 py-4 px-2 shadow-md rounded-xl hover:shadow-xl w-full hover-utility"
              key={todo._id}
            >
              <div className="flex flex-row gap-x-4 items-center">
                <button
                  type="button"
                  onClick={() => toggleCheck(todo._id)}
                  className={`w-6 h-6 flex items-center justify-center rounded-md border-2 transition-colors duration-200 ${
                    isChecked
                      ? "bg-green-500 border-green-500"
                      : "border-gray-300"
                  }`}
                >
                  {isChecked && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>

                <div className="flex flex-col gap-y-1">
                  <p
                    className={` ${
                      isChecked ? "line-through text-neutral-500" : ""
                    }`}
                  >
                    {" "}
                    {todo.title}
                  </p>
                  <p className="text-neutral-400 text-sm">
                    {formattedDateToMMDDYY(todo.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TaskLists;
