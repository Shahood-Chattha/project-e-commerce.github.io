import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

import Form from '../components/common/form';

function Authentication() {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let authentication = getAuth();
  const handleAction = (id) => {
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch((error) => {
          if(error.code === 'auth/wrong-password'){
            toast.error('Please check the Password');
          }
          if(error.code === 'auth/user-not-found'){
            toast.error('Please check the Email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        const user = authentication.currentUser;
        sendEmailVerification(user)
        .then(() => {
          navigate('/')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email Already in Use');
        }
      })
    }
    if (id === 3) {
        sessionStorage.removeItem('Auth Token');
        navigate('/authentication/login')
    }
  }
  return (
    <div className="Authentication pt-4">
      <Helmet>
        <title>Authentication</title>
        <meta name="description" content='Authenticate your self ' />
        <link rel='canonical' href='/authentication' /> 
      </Helmet>
      <Routes>
        <Route
          path='/login'
          element={
            <Form
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path='/register'
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route
          path='/logout'
          element={
            <Form
              title="Logout"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(3)}
            />
          }
        />
        <Route
          path='/forgot-password'
          element={
            <Form
              title="Reset Password"
              setEmail={setEmail}
              handleAction={() => {
                sendPasswordResetEmail(authentication, email)
                  .then(() => {
                    toast.success('Password reset email sent');
                    navigate('/authentication/login');
                  })
                  .catch((error) => {
                    console.log(error);
                    toast.error('Error resetting password');
                  });
              }}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default Authentication;
