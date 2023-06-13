/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from 'reducers/user';
import { useNavigate } from 'react-router-dom';
import { MONGO_DB_URL } from 'utils/urls';
import './LogInRegister.css'
import { Box, Button, CircularProgress } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { green } from '@mui/material/colors';

export const LogInRegister = ({ mode }) => {
  const [loading, setLoading] = useState(true);
  const accessToken = useSelector((store) => store.user.accessToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timer = useRef();
  const [success, setSuccess] = useState(false);

  console.log('mode:', mode, loading)

  useEffect(() => {
    if (accessToken) {
      navigate('/explore');
    }
  }, [accessToken]);

  const onClickGoToLogin = (resetForm, values) => {
    resetForm({ values });
    navigate('/login');
  }

  const onClickGoToRegister = (resetForm, values) => {
    resetForm({ values });
    navigate('/register');
  }

  const buttonSx = success
    ? {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700]
      }
    }
    : {
      bgcolor: '#446173',
      '&:hover': {
        bgcolor: '#2a3d47'
      }
    };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

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

    const clearUserInfo = (error) => {
      dispatch(user.actions.setAccessToken(null));
      dispatch(user.actions.setUsername(null));
      dispatch(user.actions.setUserId(null));
      dispatch(user.actions.setUserInfo(null));
      dispatch(user.actions.setError(error));
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
        } else {
          clearUserInfo(data.response);
          if (mode === 'users/register' && data.response.message === 'Username is already taken') {
            setFieldError('username', 'Username is already taken');
          } else if (mode === 'users/login') {
            setFieldError('username', 'Credentials do not match');
            setFieldError('password', 'Credentials do not match');
          }
        }
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 2000)
        setSubmitting(false);
      })
  };

  return (
    <div className="main-loginregister">
      <Formik
        key={mode}
        initialValues={{
          username: '',
          password: ''
        }}
        validate={validateValues}
        onSubmit={onFormSubmit}
        validateOnMount>
        {({ isSubmitting, isValid, resetForm, values }) => (
          <Form noValidate className="formbox">
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
              {/* {isSubmitting && <LinearProgress />} */}
            </Box>

            <Box
              margin={1}
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Button
                sx={buttonSx}
                variant="contained"
                disabled={isSubmitting || !isValid}
                type="submit"
                onClick={() => {
                  if (!isSubmitting) {
                    setSuccess(false);
                    timer.current = window.setTimeout(() => {
                      setSuccess(true);
                    }, 2000);
                  }
                }}>
                {isSubmitting && !success ? 'Submitting...' : 'Submit'}
              </Button>

              {isSubmitting && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    marginTop: '-12px',
                    marginLeft: '-12px'
                  }} />
              )}
              <Box margin={1}>
                {mode === 'users/register' ? <Button type="button" sx={{ color: '#446173' }} onClick={() => onClickGoToLogin(resetForm, values)}>Already a member? Login here</Button> : <Button type="button" sx={{ color: '#446173' }} onClick={() => onClickGoToRegister(resetForm, values)}>Not a member yet? Register here</Button>}
              </Box>

            </Box>
          </Form>
        )}
      </Formik>
    </div>
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