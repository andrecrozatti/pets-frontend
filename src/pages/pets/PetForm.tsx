// src/components/PetForm.tsx
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const PetForm: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para salvar os dados do pet
    console.log({ name, age, breed });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        boxShadow: 4,
        borderRadius: 3,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="h5" color="primary" textAlign="center">
        Cadastre seu Pet
      </Typography>
      <TextField
        label="Nome do Pet"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Idade"
        variant="outlined"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        fullWidth
        required
      />
      <TextField
        label="Raça"
        variant="outlined"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" size="large">
        Cadastrar
      </Button>
    </Box>
  );
};

export default PetForm;
