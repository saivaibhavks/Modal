import { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [shoModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="container"
        style={shoModal ? { opacity: 0.5 } : { opacity: 1 }}
      >
        <button onClick={() => setShowModal(true)}>Click me</button>
        <p>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </p>
        <p>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </p>
        <p>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </p>
        <p>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </p>
        <p>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </p>
      </div>
      {shoModal && (
        <div className="modal" style={{ opacity: 1 }}>
          <h1>Heading</h1>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </div>
      )}
    </>
  );
};

export default Modal;
