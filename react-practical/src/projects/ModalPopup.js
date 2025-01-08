import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        backgroundColor: "lightblue",
        width: "300px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <div
        className="modal"
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-around",
          alignItems:"flex-start"
        }}
      >
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <div className="modal-content">
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  );
};

const ModalPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>React Modal Popup Example</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalPopup;
