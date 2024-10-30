// src/hooks/useAuth.ts
import { useState, useContext, createContext, ReactNode, useCallback } from 'react';
import api from '../api/api';


interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [token, setToken] = useState(() => {
    const payload = sessionStorage.getItem("token");

    if (payload) {

      return payload;
    }

    return "";
  });



  const login = useCallback(async (email: string, password: string) => {
    const response = await api.post('/token', { email, password });

    const { token } = response.data;
    sessionStorage.setItem('token', token);
    setToken(token)

  }, []);

  const register = async (email: string, password: string, name: string) => {
    const response = await api.post('/users', { email, password, name });
    const { token } = response.data;
    sessionStorage.setItem('token', token);
    setToken(token)
  };

  const logout = useCallback(() => {
    sessionStorage.removeItem('token');

    setToken("");
  }, []);


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
