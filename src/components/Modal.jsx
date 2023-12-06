import React from "react";
import { IoIosClose } from "react-icons/io";

const Modal = ({ isModalOpen, onClose, children }) => {
  return (
    <>
      {isModalOpen && (
        <div className="z-10 inset-0 overflow-y-auto absolute bg-black/50">
          <div className="flex items-center justify-center min-h-screen">
            <div className="relative bg-white p-4 max-w-[80%] w-full">
              {children}
              <IoIosClose
                className="absolute top-0 right-0 curson-pointer text-3xl text-blue-500"
                onClick={() => onClose()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
