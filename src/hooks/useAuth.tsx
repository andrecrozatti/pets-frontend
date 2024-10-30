// src/hooks/useAuth.ts
import { useState, useContext, createContext, ReactNode } from 'react';
import api from '../api/api';


interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [token, setToken] = useState<string | null>(null);


  const login = async (email: string, password: string) => {
    const response = await api.post('/token', { email, password });
    const { token } = response.data;
    sessionStorage.setItem('token', token);
    setToken(token)

  };

  const register = async (email: string, password: string, name: string) => {
    const response = await api.post('/users', { email, password, name });
    const { token } = response.data;
    sessionStorage.setItem('token', token);
    setToken(token)
  };

  const logout = () => {
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ login, logout, token, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
