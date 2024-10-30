// src/components/PetCard.tsx
import React from 'react';
import { Paper, Typography, Box, Avatar, IconButton } from '@mui/material';
import { Pet } from '../../types/pet';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface PetCardProps {
  pet: Pet;
  onEdit: () => void;
  onDelete: () => void;
}

const PetCard: React.FC<PetCardProps> = ({ pet, onEdit, onDelete }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: 300,
        margin: 'auto',
        borderRadius: 2,
        textAlign: 'center',
      }}
    >

      {/* Botões de Edição e Remoção */}


      <IconButton color="primary" onClick={onEdit}>
        <EditIcon />
      </IconButton>
      <IconButton color="error" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>


      {/* Imagem do Pet */}
      <Avatar
        src={pet.photoUrl}
        alt={pet.name}
        sx={{ width: 100, height: 100, margin: 'auto', mb: 2 }}
      />

      {/* Informações do Pet */}
      <Typography variant="h6" color="primary">
        {pet.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Idade: {pet.age} anos
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Gênero: {pet.gender}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Raça: {pet.breed}
      </Typography>
    </Paper>
  );
};

export default PetCard;
