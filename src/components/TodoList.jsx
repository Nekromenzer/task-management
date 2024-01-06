import React from "react";

const TodoList = ({ taskList, handleDelete, handleEdit, handleState }) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {taskList?.map((task, idx) => (
        <div
          key={idx}
          className="w-full flex gap-2 items-center py-4 px-3 bg-sky-200 rounded"
        >
          <div className="text-xl w-[250px]">{task.title}</div>
          <div className="text-base w-[100px]">{task.date}</div>
          <div className="text-base w-[60px]">
            {task.priority ? "🔥" : "🚫"}
          </div>
          <input type="checkbox" onChange={() => handleState(idx)} />
          <button
            className="text-blue-600 font-bold"
            onClick={() => handleEdit(task, idx)}
          >
            ✒️
          </button>
          <button
            className="text-red-600 font-bold"
            onClick={() => handleDelete(idx)}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
