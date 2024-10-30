import { useCallback, useEffect, useState } from "react";
import { Pet } from "../../types/pet";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import PetCard from "../components/petCard";
import { createPet, deletePet, getPets, updatePet } from "../../api/pets";
import PetFormDialog from "../pets/PetForm";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";



const Home: React.FC = () => {
    const [pets, setPets] = useState<Pet[]>([]); // Array para armazenar os pets
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedPet, setSelectedPet] = useState<Pet | null>(null);

    // Função para buscar a lista de pets
    const fetchPets = useCallback(async () => {
        try {
            
            // const data = await getPets();
            // setPets(data);
            setPets([{
                "id": 5,
                "name": "Princess",
                "age": 2,
                "breed": "Golden Retriever",
                "color": "Brown",
                "gender": "Female",
                "photoUrl": "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                "id": 5,
                "name": "Rex",
                "age": 2,
                "breed": "Poofle",
                "color": "White",
                "gender": "Male",
                "photoUrl" :"https://images.unsplash.com/photo-1532353949707-2e77707ee8a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            
            ])
        } catch (error) {
            console.error('Error fetching pets:', error);
        }
    }, [])

    useEffect(() => {
        // Chama fetchPets ao montar o componente
        fetchPets()
    }, []);

    const { logout } = useAuth()


    const handleOpenDialog = (pet?: Pet) => {
        setSelectedPet(pet || null); // Se um pet for fornecido, edita; caso contrário, cria novo
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedPet(null);
    };



    const handleSavePet = async (petData: Pet) => {
        if (selectedPet) {
            // Editando um pet existente
            await updatePet(selectedPet.id, petData);
        } else {
            // Criando um novo pet
            await createPet(petData);
        }
        handleCloseDialog();

        // Recarregar ou atualizar lista de pets, se necessário
        fetchPets()
    };

    const handleDeletePet = async (id: number) => {
        await deletePet(id)
        fetchPets()
    }



    return (
        <Container>
            <IconButton
                color="error"
                size="medium"
                onClick={async () => { await logout() }}
            >
                <LogoutIcon />
            </IconButton>
            {/* Hero Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                    color: '#fff',
                    textAlign: 'center',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // URL da imagem, substitua conforme necessário
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 1,
                    position: 'relative',
                }}
            >
                <PetFormDialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    onSave={handleSavePet}
                    petData={selectedPet ?? undefined} // Se um pet for selecionado, passa seus dados para edição
                />
                <Box sx={{ position: 'relative', zIndex: 1, padding: 3 }}>
                    <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                        Bem-vindo ao Pet+
                    </Typography>
                    <Typography variant="h6" component="p" gutterBottom>
                        Gerencie os detalhes dos seus pets com facilidade e praticidade.
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ mt: 3 }}
                        onClick={() => handleOpenDialog()}
                    >
                        Adicione um Pet
                    </Button>
                </Box>
            </Box>


            {/* Lista de Pets */}
            <Box sx={{
                display: 'flex', justifyContent: 'space-around', marginTop: 2,
                alignItems: 'center',
            }}>

                {pets.map((pet, index) => {

                    return (
                        <Box key={index}>

                            {/* Botões de Edição e Remoção */}

                            <IconButton color="primary" onClick={() => { handleOpenDialog(pet) }}>
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error" onClick={() => { handleDeletePet(pet.id) }}>
                                <DeleteIcon />
                            </IconButton>

                            <PetCard
                                pet={pet}
                            />
                        </Box >

                    )
                })}


            </Box>
        </Container>
    );

}


export default Home;