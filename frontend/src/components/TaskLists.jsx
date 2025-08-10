import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { formattedDateToMMDDYY } from "../utils/utils";
import { ToastContainer, toast } from "react-toastify";
import { useMemo } from "react";
import { Trash2 } from "lucide-react";
const TaskLists = () => {
  const { todos, error, loading, activeTab } = useTodos();
  const [checkedStates, setCheckedStates] = useState({}); // store checked state per todo

  const toggleCheck = (id) => {
    setCheckedStates((prev) => {
      return { ...prev, [id]: !prev[id] };
    });

    // Get current checked state *before* toggle
    const isCurrentlyChecked = checkedStates[id] || false;
    const willBeChecked = !isCurrentlyChecked;

    if (willBeChecked) {
      toast.success("Congratulations");
    }
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

      <section className="text-black mt-4 grid grid-cols-1 w-full gap-4 place-items-center max-w-3xl">
        {filteredTodos.map((todo) => {
          const isChecked = checkedStates[todo._id] || false;

          return (
            <div
              className="border border-gray-200 py-4 px-2 shadow-md rounded-xl group hover:shadow-xl w-full hover-utility"
              key={todo._id}
            >
              <div className="flex flex-row gap-x-4 items-center justify-between ">
                <div className="flex flex-row gap-x-4 items-center">
                  <button
                    type="button"
                    onClick={() => {
                      toggleCheck(todo._id);
                    }}
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
                <Trash2 className="opacity-0 group-hover:opacity-100 cursor-pointer size-8 transition-opacity hidden group-hover:block hover:bg-light-red hover-utility rounded-md  p-2 text-dark-red" />
              </div>
            </div>
          );
        })}
        <ToastContainer
          className="custom-toast rounded-xl p-4 md:p-0"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />{" "}
      </section>
    </>
  );
};

export default TaskLists;
