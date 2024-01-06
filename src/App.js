import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import AddListForm from "./components/AddListForm";

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
        <AddListForm
          tasks={tasks}
          handleOnChange={handleOnChange}
          handleAdd={handleAdd}
        />
        <TodoList
          taskList={taskList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleState={handleState}
        />
      </div>
    </div>
  );
}

export default App;
