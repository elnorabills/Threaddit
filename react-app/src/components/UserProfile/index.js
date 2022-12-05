
import React from "react";
import MyAnswers from "../Answers/MyAnswers";
import MyQuestions from "../Questions/MyQuestions";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
      <MyQuestions />
      <MyAnswers />
    </div>
  );
};

export default UserProfile;
