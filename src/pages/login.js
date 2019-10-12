import React from 'react';
import { push } from 'gatsby';
import { isAuthenticated, login } from '../utils/auth';

const Login = () => {
  if (!isAuthenticated()) {
    login();

    return <p>Redirecting you to the login screen...</p>;
  }

  push('/dashboard');
  return <p>Redirecting you to the dashboard...</p>;
};

export default Login
