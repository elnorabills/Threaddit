
import LoginForm from "../auth/LoginForm";
import { Modal } from "../../Modal-Context/Modal";
import React, { useState } from "react";
import logo from "../../images/threadit_circle.png";
import "./SplashPage.css"

const SplashPage = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
      <div className="splash-container">
        <div className="message-box-container-left">
          <i className="fa-solid fa-message" id="message-box-small-left"></i>
          <i className="fa-solid fa-message" id="message-box-left"></i>
        </div>
        <div className="splash-details-one">
          <button
            className="logo-button"
            onClick={() => setShowLoginModal(true)}
          >
            <img className="splash-logo" src={logo} alt="Logo" />
          </button>
          {showLoginModal && (
            <Modal onClose={() => setShowLoginModal(false)}>
              <LoginForm setShowLoginModal={setShowLoginModal} />
            </Modal>
          )}
          <h1 className="splash-h1">Dive Into Anything</h1>
          <p className="para-one">
            Reddit is home to thousands of communities, endless conversation,
            and authentic human connection. Whether you're into breaking news,
            sports, TV fan theories, or a never-ending stream of the internet's
            cutest animals, there's a community on Reddit for you.
          </p>
        </div>
        <div className="message-box-container-right">
          <i className="fa-solid fa-message" id="message-box-small-right"></i>
          <i className="fa-solid fa-message" id="message-box-right"></i>
        </div>
      </div>
    );
}

export default SplashPage;
