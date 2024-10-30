// src/components/PetFormDialog.tsx
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box
} from '@mui/material';
import { Pet } from '../../types/pet';

interface PetFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (petData: Pet) => void;
  petData?: Pet; // Dados do pet para edição, opcional
}

const PetFormDialog: React.FC<PetFormDialogProps> = ({ open, onClose, onSave, petData }) => {
  const [idPet, setIdPet] = useState(0);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'Masculino' | 'Feminino'>('Masculino');
  const [breed, setBreed] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  // Carregar dados do pet em caso de edição
  useEffect(() => {
    if (petData) {
      setIdPet(petData.id)
      setName(petData.name);
      setAge(petData.age.toString());
      setGender(petData.gender);
      setBreed(petData.breed);
      setPhotoUrl(petData.photoUrl);
    } else {
      setIdPet(0);
      setName('');
      setAge('');
      setGender('Masculino');
      setBreed('');
      setPhotoUrl('');
    }
  }, [petData]);

  const handleSubmit = () => {
    onSave({
      id: idPet,
      name,
      age: parseInt(age, 10),
      gender,
      breed,
      photoUrl,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{petData ? 'Editar Pet' : 'Cadastrar Pet'}</DialogTitle>
      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField
            label="Id"
            variant="outlined"
            value={idPet}
            onChange={(e) => setIdPet(Number(e.target.value))}
            fullWidth
            type="number"
            required
          />
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
            type="number"
          />
          <TextField
            label="Gênero"
            variant="outlined"
            value={gender}
            onChange={(e) => setGender(e.target.value as 'Masculino' | 'Feminino')}
            select
            SelectProps={{
              native: true,
            }}
            fullWidth
            required
          >
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </TextField>
          <TextField
            label="Raça"
            variant="outlined"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="URL da Foto"
            variant="outlined"
            value={photoUrl}
            onChange={(e) => setPhotoUrl(e.target.value)}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {petData ? 'Salvar Alterações' : 'Cadastrar'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PetFormDialog;
