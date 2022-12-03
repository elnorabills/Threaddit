import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  return (
    <form className="modal-container" onSubmit={onLogin}>
      <h2 className="modal-form-title">Log In</h2>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <input
          className='modal-input-title'
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
          required
        />
      </div>
      <div>
        <input
          className='modal-input-title'
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
          required
        />
        <button className="modal-btn modal-submit-btn" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
