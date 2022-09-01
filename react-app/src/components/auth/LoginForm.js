import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(() => {
    let errors = [];
    if (!(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/.test(email))) {
      errors.push('Please provide a valid email.')
    }
    if (password.length < 4) {
      errors.push('Please provide a valid password.')
    }
    setErrors(errors);

  }, [email, password])




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
    return <Redirect to='/explore' />;
  }





  return (
    <form onSubmit={onLogin}>
      <div className='loginErr'>
        {errors.map((error, ind) => (
          <div key={ind}>* {error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <button type='submit'>Login</button>
        <button
          className="submit-btn"
          onClick={() => {
            setPassword("password");
            setEmail("demo@aa.io");
          }}
        >
          Demo User
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
