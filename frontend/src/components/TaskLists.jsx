import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { formattedDateToMMDDYY } from "../utils/utils";
import { toast } from "react-toastify";
import { useMemo } from "react";
import { Trash2 } from "lucide-react";
import { handleDelete, handleUpdate } from "../services/todoService";

const TaskLists = () => {
  const { todos, error, loading, activeTab } = useTodos();
  const [checkedStates, setCheckedStates] = useState({}); // store checked state per todo
  const { refetch } = useTodos();
  const toggleCheck = (id) => {
    setCheckedStates((prev) => {
      return { ...prev, [id]: !prev[id] };
    });

    // Get current checked state *before* toggle
    const isCurrentlyChecked = checkedStates[id] || false;
    const willBeChecked = !isCurrentlyChecked;

    if (willBeChecked) {
      toast.success("Task Done!", { toastId: "done-task" });
    }
  };

  const filteredTodos = useMemo(() => {
    let result = [];
    switch (activeTab) {
      case "completed":
        result = todos.filter((todo) => todo.completed);
        break;
      case "active":
        result = todos.filter((todo) => !todo.completed);
        break;
      default:
        result = todos;
    }

    return [...result].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
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
                    onClick={async () => {
                      toggleCheck(todo._id);
                      try {
                        await handleUpdate(
                          todo._id,
                          { completed: todo.completed },
                          refetch
                        );
                      } catch (error) {
                        toast.error("Failed to update task", {
                          toastId: "failed-update-task",
                        });
                      }
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
                <Trash2
                  onClick={async () => {
                    try {
                      await handleDelete(todo._id, refetch);
                      toast.success("Successfully deleted task!", {
                        toastId: "done-delete-task",
                      });
                    } catch (error) {
                      toast.error("Failed to delete task", {
                        toastId: "failed-delete-task",
                      });
                    }
                  }}
                  className="opacity-0 group-hover:opacity-100 cursor-pointer size-8 transition-opacity hidden group-hover:block hover:bg-light-red hover-utility rounded-md  p-2 text-dark-red"
                />
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TaskLists;
