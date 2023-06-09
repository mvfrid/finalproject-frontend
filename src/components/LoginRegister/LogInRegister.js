/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { MONGO_DB_URL } from 'utils/urls';
import './LogInRegister.css'
import { Box, Button, LinearProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

export const LogInRegister = ({ mode }) => {
  const [loading, setLoading] = useState(true);
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

  const validateValues = (values) => {
    const errors = {};
    if (mode === 'users/register') {
      if (!values.username) {
        errors.username = 'Required';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else {
        if (values.password.length < 6) {
          errors.password = 'Needs to contain a minimum of 6 characters';
        }
        if (!/(?=.*[a-z])/.test(values.password)) {
          errors.password = 'Needs to contain a lowercase letter';
        }
        if (!/(?=.*[A-Z])/.test(values.password)) {
          errors.password = 'Needs to contain an uppercase letter';
        }
        if (!/(?=.*\d)/.test(values.password)) {
          errors.password = 'Needs to contain a number';
        }
      }
    }

    if (mode === 'users/login') {
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
    }
    return errors;
  };

  const onFormSubmit = (values, { setSubmitting, setFieldError }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }
    fetch(MONGO_DB_URL(mode), options)
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          dispatch(user.actions.setAccessToken(data.response.accessToken));
          dispatch(user.actions.setUsername(data.response.username));
          dispatch(user.actions.setUserId(data.response.id));
          dispatch(user.actions.setUserInfo(data.response))
          dispatch(user.actions.setError(null));
        } else if (mode === 'users/register' && data.response.message === 'Username is already taken') {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setUserInfo(null));
          dispatch(user.actions.setError(data.response));
          setFieldError('username', 'Username is already taken');
        } else if (mode === 'users/login') {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setUserInfo(null));
          setFieldError('username', 'Credentials do not match');
          setFieldError('password', 'Credentials do not match');
        } else {
          dispatch(user.actions.setAccessToken(null));
          dispatch(user.actions.setUsername(null));
          dispatch(user.actions.setUserId(null));
          dispatch(user.actions.setUserInfo(null))
          dispatch(user.actions.setError(data.response))
        }
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 2000)
        setSubmitting(false);
      })
  };

  return (
    <Formik
      key={mode}
      initialValues={{
        username: '',
        password: ''
      }}
      validate={validateValues}
      onSubmit={onFormSubmit}
      validateOnMount>
      {({ isSubmitting, isValid }) => (
        <Form noValidate>
          {mode === 'users/register' ? <h2>Register</h2> : <h2>Login</h2>}
          <Box margin={1}>
            <Field
              component={TextField}
              name="username"
              type="text"
              label="Username" />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password" />
            {isSubmitting && <LinearProgress />}
          </Box>
          <Box margin={1}>
            <Button
              sx={{ margin: 1 }}
              variant="contained"
              color="primary"
              disabled={isSubmitting || !isValid}
              type="submit">
              Submit
            </Button>
            {mode === 'users/register' ? <Button type="button" variant="outlined" onClick={onClickGoToLogin}>Log in instead</Button> : <Button type="button" variant="outlined" onClick={onClickGoToRegister}>Register instead</Button>}
          </Box>
        </Form>
      )}
    </Formik>
  )
}

// eslint-disable-next-line no-lone-blocks
{ /* <div className="main">
      {mode === '/users/register' ? <h2>Register</h2> : <h2>Login</h2>}
      <form onSubmit={onFormSubmit}>
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
      // eslint-disable-next-line max-len
      {mode === '/users/register' ? <button type="button" onClick={onClickGoToLogin}>Log in instead</button> : <button type="button" onClick={onClickGoToRegister}>Register instead</button>}
    </div> */ }

// else if (mode === '/users/register' && data.response.message === 'Username is already taken') {
//   dispatch(user.actions.setAccessToken(null));
//   dispatch(user.actions.setUsername(null));
//   dispatch(user.actions.setUserId(null));
//   dispatch(user.actions.setUserInfo(null));
//   dispatch(user.actions.setError(data.response));
// setErrorMsgRegister('Username is already taken');
// } else if (mode === '/users/login') {
//   dispatch(user.actions.setAccessToken(null));
//   dispatch(user.actions.setUsername(null));
//   dispatch(user.actions.setUserId(null));
//   dispatch(user.actions.setUserInfo(null));
//   // setErrorMsgLogin('Credentials do not match')
// }