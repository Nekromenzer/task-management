import React from "react";

const AddListForm = ({ tasks, handleOnChange, handleAdd }) => {
  const formElements = [
    {
      label: "Task",
      name: "title",
      value: tasks.title,
      placeholder: "task",
      type: "text",
    },
    {
      label: "Date",
      name: "date",
      value: tasks.date,
      placeholder: "12/12/2021",
      type: "date",
    },
    {
      label: "Priority",
      name: "priority",
      value: tasks.priority,
      placeholder: "task",
      type: "checkbox",
    },
  ];

  return (
    <div className="flex items-center gap-8 w-full max-w-[600px]">
      {formElements.map((formItem, id) => (
        <div className="flex flex-col" key={id}>
          <label>{formItem.label}</label>
          <input
            name={formItem.name}
            type={formItem.type}
            onChange={(e) => handleOnChange(e)}
            value={tasks.title}
            placeholder={tasks.placeholder}
          />
        </div>
      ))}
      <div>
        <button
          className="bg-blue-400 hover:bg-green-400 transition-colors ease-in  duration-300 px-4 py-2 min-w-[6rem] rounded"
          onClick={() => handleAdd()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddListForm;
