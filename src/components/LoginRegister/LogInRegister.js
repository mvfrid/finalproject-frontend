/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { MONGO_DB_URL } from 'utils/urls';

export const LogInRegister = ({ mode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('true');
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log('mode:', mode, loading)

  useEffect(() => {
    if (accessToken) {
      navigate('/explore');
    }
  }, [accessToken]);

  const onClickGoToLogin = () => {
    navigate('/login');
  }

  const onClickGoToRegister = () => {
    navigate('/register');
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }
    fetch(MONGO_DB_URL(mode), options)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setError(null));
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setError(data.response))
        }
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 2000)
      })
  };

  return (
    <div className="main">
      <h1>REGISTER & LOGIN COMPONENT HERE</h1>
      {mode === 'users/register' ? <h2>Register</h2> : <h2>Login</h2>}
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={onFormSubmit}>Submit</button>
      </form>
      {mode === 'users/register' ? <button type="button" onClick={onClickGoToLogin}>Log in instead</button> : <button type="button" onClick={onClickGoToRegister}>Register instead</button>}
    </div>
  )
}