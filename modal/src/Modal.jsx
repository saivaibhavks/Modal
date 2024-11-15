import { useRef, useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [shoModal, setShowModal] = useState(false);

  const ref = useRef(null);

  console.log("ref", ref);

  const modalId = document.querySelector("#modal");
  console.log("id", modalId);
  return (
    <div className="main">
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
        <div id="modal" ref={ref} className="modal" style={{ opacity: 1 }}>
          <div style={{ display: "flex" }}>
            <h1>Heading</h1>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setShowModal(false)}
            >
              X
            </span>
          </div>
          Irure dolor dolor duis laboris adipisicing est ipsum id amet dolor
          sint. Irure dolor dolor duis laboris adipisicing est ipsum id amet
          dolor sint.
        </div>
      )}
    </div>
  );
};

export default Modal;
