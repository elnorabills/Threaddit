import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

    const onSignUp = async (e) => {
      e.preventDefault();

      let reg = // eslint-disable-next-line
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!email.toLowerCase().match(reg)) {
      setEmail("");
      errors.push("Invalid email.");
      }

      if (password === repeatPassword) {
        const data = await dispatch(signUp(username, email, password));
        if (data) {
          // errors.push("Invalid email.");
          setErrors(data);
        }
      } else {
        setErrors(["Passwords must match."]);
      }
    };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className="modal-container" onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div className="errors" key={ind}>
            {error}
          </div>
        ))}
      </div>
      <h2 className="modal-form-title">Sign Up</h2>
      {/* <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> */}
      <div>
        <input
          className="modal-input-title"
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          placeholder="Username"
          required
        ></input>
      </div>
      <div>
        <input
          className="modal-input-title"
          type="email"
          name="email"
          onChange={updateEmail}
          value={email}
          placeholder="Email"
          required
        ></input>
      </div>
      <div>
        <input
          className="modal-input-title"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          placeholder="Password"
          required
        ></input>
      </div>
      <div>
        <input
          className="modal-input-title"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder="Repeat Password"
          required={true}
        ></input>
      </div>
      <button className="modal-btn modal-submit-btn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
