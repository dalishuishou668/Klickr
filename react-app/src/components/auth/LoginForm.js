import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import * as sessionActions from "../../store/session";
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()


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

  const demologin = async () => {
    await dispatch(sessionActions.login("demo@aa.io", "password"));
    history.push('/explore');
  }




  return (
    <div className='loginPage'>
      <div class='form1'>
        <img id='loginLogo' src='../../../../static/Klickr-logos_black.png' alt='login_logo' />
        <h3 className='loginTitle'>Log in to Klickr</h3>
        <form onSubmit={onLogin} className='login-form'>
          <div className='loginErr'>
            {errors.map((error, ind) => (
              <div key={ind}>* {error}</div>
            ))}
          </div>

          <div className='loginlabel'>Email:</div>
          <label class='inputLogin'>

            {/* <i class="fa-regular fa-user"></i> */}
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}

            />
          </label>
          <div className='loginlabel'>Password:</div>
          <label class='inputLogin'>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </label>


          {/* <div>
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
          </div> */}

          <button type='submit' className="btn-hover color-3">Login</button>
          <NavLink className='signupLink' to='/sign-up'>No account?  Create an account</NavLink>
          <h3 className='loginh3'>-------------------------------- Or --------------------------------</h3>
          <div>
            <button className='btn-hover color-3' onClick={demologin}>Log in as Demo User</button>
          </div>
          <button className='btn-hover color-3' onClick={() => history.push('/')}>Back</button>

          {/* <button
          className="submit-btn"
          onClick={() => {
            setPassword("password");
            setEmail("demo@aa.io");
          }}
        >
          Demo User
        </button> */}



        </form>

      </div>


    </div>

  );
};

export default LoginForm;
