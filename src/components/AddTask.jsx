import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const AddTask = ({
  tasks,
  isModalOpen,
  setIsModalOpen,
  setTasks,
  selectedIndex,
}) => {
  const [task, setTask] = useState("");
  const [taskSummary, setTaskSummary] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (
      selectedIndex !== null &&
      Array.isArray(tasks) &&
      tasks.length > selectedIndex &&
      tasks[selectedIndex]
    ) {
      setTask(tasks[selectedIndex].task);
      setTaskSummary(tasks[selectedIndex].taskSummary || "");
    }
  }, [selectedIndex, tasks]);

  const onSubmit = (e) => {
    e.preventDefault();

    setTasks((prevTasks) => {
      if (selectedIndex !== null && prevTasks[selectedIndex]) {
        const updatedTasks = [...prevTasks];
        updatedTasks[selectedIndex] = {
          task: task,
          taskSummary: taskSummary,
        };
        return updatedTasks;
      } else {
        return [...prevTasks, { task: task, taskSummary: taskSummary }];
      }
    });

    setTask("");
    setTaskSummary("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} onClose={closeModal}>
        <form action="" onSubmit={onSubmit}>
          <div className="flex flex-col text-left pl-3 pr-10">
            <label className="mb-2" htmlFor="task-title">
              Title
            </label>
            <input
              className="w-full border-gray-300 focus:border-blue-400 p-1"
              type="text"
              id="task-title"
              placeholder="Task Title"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="flex flex-col text-left pl-3 pr-10 mb-6">
            <label className="mb-2" htmlFor="task-summary">
              Summary
            </label>
            <input
              className="w-full border-gray-300 focus:border-blue-400 p-1"
              type="text"
              id="task-summary"
              placeholder="Task Summary"
              value={taskSummary}
              onChange={(e) => setTaskSummary(e.target.value)}
            />
          </div>
          <div className="flex justify-between px-10">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(false);
              }}
            >
              Cancel{" "}
            </button>
            <input
              type="submit"
              className="bg-blue-400 py-3 px-4 text-white"
              value="Submit"
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTask;
