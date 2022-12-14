import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()
  const [hasSubmitted, setHasSubmitted] = useState(false)



  let regex1 = /[a-zA-Z0-9]/

  useEffect(() => {
    let errors = [];
    if (username.length < 3 || !(regex1.test(username)) || username.length > 30){
      errors.push('Username must be at least 3 characters and less than 30 characters.')
    }
    if (!(/[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/.test(email))) {
      errors.push('Email must be in the format like example@gmail.com.')
    }
    if (password.length < 4) {
      errors.push('Password must be at least 4 charaters or more.')
    }
    if (password !== repeatPassword) {
      errors.push('Confirm Password must be the same as the password field.')
    }
    setErrors(errors);

  }, [username, email, password, repeatPassword])





  const onSignUp = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (password === repeatPassword && !errors.length) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setHasSubmitted(false)
        setErrors(data)
      }
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
    <div className='loginPage'>
      <div class='form2'>
        <img id='loginLogo' src='../../../../static/Klickr-logos_black.png' alt='signup_logo' />
        <h3 className='loginTitle'>Sign up to Klickr</h3>
        <form onSubmit={onSignUp} className='login-form'>
          <div className='signupErr'>
            {hasSubmitted && errors.map((error, ind) => (
              <div key={ind}>* {error}</div>
            ))}
          </div>

          <div className='loginlabel'>Username:</div>
          <label class='inputLogin'>
            {/* <i class="fa-regular fa-user"></i> */}
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              placeholder='Username'
            />
          </label>
          <div className='loginlabel'>Email:</div>
          <label class='inputLogin'>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              placeholder='Email'
            />
          </label>
          <div className='loginlabel'>Password:</div>
          <label class='inputLogin'>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              placeholder='Password'
            />
          </label>
          <div className='loginlabel'>Confirm password:</div>
          <label class='inputLogin'>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              placeholder='Confirm Password'
            />
          </label>

          {/* <div>
            <label>User Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Password</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div> */}
          <button type='submit' className="btn-hover color-3">Sign Up</button>
          <button className='btn-hover color-3' onClick={() => history.push('/')}>Back</button>
          <NavLink className='loginLink' to='/login'>Already have an account? Log in here.</NavLink>
        </form>
      </div>
    </div>

  );
};

export default SignUpForm;
