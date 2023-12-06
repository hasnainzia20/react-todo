import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";

const Tasks = ({ tasks, deleteHandler, updateHandler, setSelectedIndex }) => {
  const onDelete = (index) => {
    deleteHandler(index);
  };
  const onUpdate = (index) => {
    setSelectedIndex(index);
    updateHandler(index);
  };

  return (
    <div>
      {tasks && tasks.length !== 0 ? (
        <div>
          {tasks.map((task, index) => (
            <div key={index} className="border border-slate-300 p-2 mb-2">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">{task.task}</h2>
                <div className="flex gap-2 text-lg">
                  <FaPenToSquare
                    style={{ color: "blue" }}
                    onClick={() => onUpdate(index)}
                  />

                  <RiDeleteBinFill
                    style={{ color: "red" }}
                    onClick={() => onDelete(index)}
                  />
                </div>
              </div>
              <div className="text-gray-600">
                {task.taskSummary ? task.taskSummary : "No summary"}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-slate-400 font-medium text-xl mb-10">
            You have no Tasks
          </h2>
        </div>
      )}
    </div>
  );
};

export default Tasks;
