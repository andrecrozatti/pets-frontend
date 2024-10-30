// src/components/RegisterForm.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';



const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const { register } = useAuth();


  const navigate = useNavigate()
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await register(email, password, username);
      navigate("/login")
    } catch (error) {
      alert('Erro ao cadastrar');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 300, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Cadastre-se
      </Typography>
      <TextField
        label="Usuário"
        type="text"
        fullWidth
        required
        margin="normal"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Email"
        type="email"
        fullWidth
        required
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        required
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Registrar
      </Button>
    </Box>
  );
};

export default RegisterForm;
