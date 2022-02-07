import React from 'react';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import "./SignUpStyles.scss";

export const SignUpPage = () => {

  return (
      <div className='sign-up-container'>
          <SignUpForm/>
      </div>
  )
};

