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

      if (password === repeatPassword) {
        const data = await dispatch(signUp(username, email, password));
        if (data) {
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
    <form className="modal-container-signup" onSubmit={onSignUp}>
      <div className='errors'>
        {errors.map((error, ind) => (
          <div key={ind}>
            {error}
          </div>
        ))}
      </div>
      <h2 className="modal-form-title">Sign Up</h2>
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
