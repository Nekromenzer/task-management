import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState({
    title: "",
    date: "",
    status: "",
    priority: false,
  });

  const [taskList, setTaskList] = useState([]);

  const handleOnChange = (e) => {
    if (e.target.name === "priority") {
      setTasks({ ...tasks, [e.target.name]: e.target.checked });
    } else {
      setTasks({ ...tasks, [e.target.name]: e.target.value });
    }
  };

  const handleAdd = () => {
    if (tasks.title !== "" && tasks.date !== "") {
      // const sampleList = [...taskList];
      // sampleList.push(tasks);
      // setTaskList(sampleList);
      setTaskList([...taskList, tasks]);
      // clear the input after task added to the list
      setTasks({
        title: "",
        date: "",
        status: false,
        priority: false,
      });
    }
  };

  const handleDelete = (id) => {
    const newList = taskList.filter((task, idx) => idx !== id);
    setTaskList(newList);
  };

  const handleEdit = (task, id) => {
    const newTask = taskList.filter((_, idx) => idx === id);
    setTasks(newTask[0]);
    handleDelete(id);
  };

  const handleState = (idx) => {
    const newList = taskList.map((item, index) => {
      if (index === idx) {
        return {
          ...item,
          status: !item.status,
        };
      }
      return item;
    });
    setTaskList(newList);
  };

  return (
    <div className="App">
      <div className="h-screen w-auto px-6 bg-blue-100">
        <div className="flex items-center gap-8 ">
          <div className="flex flex-col">
            <label>Task</label>
            <input
              name="title"
              type="text"
              onChange={(e) => handleOnChange(e)}
              value={tasks.title}
              placeholder="task"
            />
          </div>
          <div className="flex flex-col">
            <label>Date</label>
            <input
              name="date"
              type="date"
              onChange={(e) => handleOnChange(e)}
              value={tasks.date}
              placeholder="12/12/2021"
            />
          </div>
          <div className="flex flex-col">
            <label>Priority</label>
            <input
              name="priority"
              type="checkbox"
              onChange={(e) => handleOnChange(e)}
              checked={tasks.priority}
            />
          </div>
          <div>
            <button
              className="bg-blue-400 px-4 py-2 min-w-[6rem] rounded"
              onClick={() => handleAdd()}
            >
              Add
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          {taskList.map((task, idx) => (
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
      </div>
    </div>
  );
}

export default App;
