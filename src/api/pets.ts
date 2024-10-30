// src/api/petsApi.ts
import api from './api';

export interface Pet {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Famale';
  breed: string;
  photoUrl: string;
}

// Função para obter todos os pets
export const getPets = async (): Promise<Pet[] | void> => {

};



// Função para criar um novo pet
export const createPet = async (petData: Pet): Promise<Pet | void> => {
  
};

// Função para atualizar um pet existente
export const updatePet = async (id: number, petData: Partial<Omit<Pet, 'id'>>): Promise<Pet | void> => {
  
};

// Função para deletar um pet pelo ID
export const deletePet = async (id: number): Promise<void> => {
  
};
