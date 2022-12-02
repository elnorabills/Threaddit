
import React, { useState } from "react";
import { Modal } from "../../Modal-Context/Modal";
import SignUpForm from "./SignUpForm";

function SignUpModalForm() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="nav-buttons" type="button" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default SignUpModalForm;
