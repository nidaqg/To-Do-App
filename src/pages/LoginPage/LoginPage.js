import React from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import "./LoginStyles.scss";

export const LoginPage = () => {

  return (
      <div className='login-container'>
          <LoginForm/>
      </div>
  )
};