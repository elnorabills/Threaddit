
import React, { useState } from "react";
import { Modal } from "../../Modal-Context/Modal";
import LoginForm from "./LoginForm";

function LoginModalForm() {
    
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="login-btn"
        onClick={() => setShowModal(true)}
      >
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default LoginModalForm;
