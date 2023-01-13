import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {

    return (
      <div className="sidebar-container">
        <NavLink className="nav-sidebar" to="/home">
          <i className="fa-solid fa-house"></i>
          <h3>Home</h3>
        </NavLink>
        <h3 className="h3-communities">YOUR COMMUNITIES</h3>
        <NavLink className="nav-sidebar" to="askScience">
          <i id="one" className="fa-solid fa-flask"></i>
          <h3 className="sub-thread">t/AskScience</h3>
        </NavLink>
        <NavLink className="nav-sidebar" to="/askThreaddit">
          <i id="one" className="fa-solid fa-circle-question"></i>
          <h3 className="sub-thread">t/AskThreaddit</h3>
        </NavLink>
        <NavLink className="nav-sidebar" to="doesAnybodyElse">
          <i id="one" className="fa-solid fa-people-arrows"></i>
          <h3 className="sub-thread">t/DoesAnybodyElse</h3>
        </NavLink>
        <NavLink className="nav-sidebar" to="/gaming">
          <i id="one" className="fa-solid fa-gamepad"></i>
          <h3 className="sub-thread">t/gaming</h3>
        </NavLink>
        <NavLink className="nav-sidebar" to="/movies">
          <i id="one" className="fa-solid fa-film"></i>
          <h3 className="sub-thread">t/movies</h3>
        </NavLink>
      </div>
    );
}

export default Sidebar;
