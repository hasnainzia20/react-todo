import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const deleteHandler = (index) => {
    setTasks((prevTasks) => prevTasks.filter((task, i) => i !== index));
  };
  const updateHandler = (index) => {
    console.log(tasks[index]);
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="text-left px-40 py-20">
        <h1 className="text-4xl font-bold text-left mb-2 ">My Tasks</h1>
        <Tasks
          tasks={tasks}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
          setSelectedIndex={setSelectedIndex}
        />
        <button
          className="bg-blue-500 text-[#fff] w-full p-1 text-xl"
          onClick={openModal}
        >
          New Task
        </button>
      </div>
      <AddTask
        tasks={tasks}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setTasks={setTasks}
        selectedIndex={selectedIndex}
      />
    </>
  );
}

export default App;
