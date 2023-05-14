import ReactDOM from "react-dom";
import React from "react";
import "./modal.css";

export const Modal = (props) => {
  const { explanation, closeModal } = props;
  return ReactDOM.createPortal(
    <div className="modal myFont flex justify-center items-center w-screen">
      <div className="modalBox">
        <div className="header flex justify-evenly w-full
        items-center">
          <button className="closebutton
          flex  text-gray-500" onClick={closeModal}>✘</button>
          <span className="text-sm text-gray-500">توضیحات</span>
        </div>
        <p className="rounded-md shadow-2xl">{explanation}</p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
