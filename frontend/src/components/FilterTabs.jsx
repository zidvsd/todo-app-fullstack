import React from "react";
import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { firstLetterToUpperCase } from "../utils/utils";
const FilterTabs = () => {
  const { activeTab, setActiveTab } = useTodos();
  const tabs = ["all", "active", "completed"];
  return (
    <div className="flex flex-row space-x-8 text-primary lg:space-x-4 ">
      {tabs.map((tab, index) => (
        <button
          onClick={() => setActiveTab(tab)}
          className={`${
            activeTab === tab ? "bg-accent text-white" : "bg-transparent"
          } flex cursor-pointer p-2   items-center flex-row gap-x-2 rounded-md hover-utility hover:opacity-80`}
          key={index}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-funnel-icon"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          {firstLetterToUpperCase(tab)}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
