import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import SignIn from '../pages/login/SignIn';
import SignUp  from '../pages/login/SignUp';

export const OpenRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} /> 
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
