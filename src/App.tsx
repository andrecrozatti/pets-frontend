
import React from 'react';
import { AuthProvider } from './hooks/useAuth.tsx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/Index.tsx';

const App: React.FC = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
};

export default App;
