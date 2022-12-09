
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LoginModalForm from "../auth/LoginModalForm";
import SignUpModalForm from "../auth/SingUpModalForm";
import LogoutButton from "../auth/LogoutButton";
import DemoUserLogin from "../auth/DemoUserLogin";
import logo from "../../images/threadit_logo.png"
import "./Nav-Bar.css";


const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [user]);

  return (
    <>
      <div className="navBar-top" />
      <div className="navBar-container">
        {!isLoggedIn && (
          <NavLink to="/" className="logo">
            <img className="logo" src={logo} />
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/home" className="logo">
            <img className="logo" src={logo} />
          </NavLink>
        )}
        <nav className="navBar-ul-container">
          <ul className="navBar-ul">
            {!isLoggedIn && (
              <li>
                <DemoUserLogin />
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <LoginModalForm />
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <SignUpModalForm />
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink id="user-link" to="/profile" exact={true} activeClassName="active">
                  <i className="fa-solid fa-user fa-xl"></i>
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <LogoutButton />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
