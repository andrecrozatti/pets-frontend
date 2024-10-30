// src/api/petsApi.ts
import api from './api';

export interface Pet {
  id: string;
  name: string;
  age: number;
  gender: 'Masculino' | 'Feminino';
  breed: string;
  photoUrl: string;
}

// Função para obter todos os pets
export const getPets = async (): Promise<Pet[]> => {
  const response = await api.get('/pets');
  return response.data;
};

// Função para obter um pet específico pelo ID
export const getPetById = async (id: string): Promise<Pet> => {
  const response = await api.get(`/pets/${id}`);
  return response.data;
};

// Função para criar um novo pet
export const createPet = async (petData: Omit<Pet, 'id'>): Promise<Pet> => {
  const response = await api.post('/pets', petData);
  return response.data;
};

// Função para atualizar um pet existente
export const updatePet = async (id: string, petData: Partial<Omit<Pet, 'id'>>): Promise<Pet> => {
  const response = await api.put(`/pets/${id}`, petData);
  return response.data;
};

// Função para deletar um pet pelo ID
export const deletePet = async (id: string): Promise<void> => {
  await api.delete(`/pets/${id}`);
};
