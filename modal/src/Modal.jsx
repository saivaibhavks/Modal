import { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [shoModal, setShowModal] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setShowModal(true)}>Click me</button>
      {shoModal && (
        <div className="modal">
          <h1>Heading</h1>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </div>
      )}
    </div>
  );
};

export default Modal;
