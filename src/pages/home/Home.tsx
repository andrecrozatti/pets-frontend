import { useEffect, useState } from "react";
import { Pet } from "../../types/pet";
import { Box, Button, Container, Typography } from "@mui/material";
import PetCard from "../components/petCard";
import { getPets } from "../../api/pets";




const Home: React.FC = () => {
    const [pets, setPets] = useState<Pet[]>([]); // Array para armazenar os pets

    const handleEdit = () => {
        console.log("Editando pet...");
        // lógica de edição aqui
    };

    const handleDelete = () => {
        console.log("Removendo pet...");
        // lógica de remoção aqui
    };

    useEffect(() => {
        //Fetch API para buscar os pets
        // getPets()
        //     .then(response => response)
        //     .then(data => setPets(data))
        //     .catch(error => console.error('Error:', error))

        // Simulando a busca de dados
        const examplePets: Pet[] = [
            {
                name: 'Rex',
                age: 5,
                gender: 'Masculino',
                breed: 'Salsicha',
                photoUrl: 'https://images.unsplash.com/photo-1518887499460-71d222eed89d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                name: 'Buddy',
                age: 3,
                gender: 'Masculino',
                breed: 'Beagle',
                photoUrl: 'https://images.unsplash.com/photo-1518887499460-71d222eed89d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                name: 'Buddy',
                age: 3,
                gender: 'Masculino',
                breed: 'Beagle',
                photoUrl: 'https://images.unsplash.com/photo-1518887499460-71d222eed89d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
            ,
            {
                name: 'Buddy',
                age: 3,
                gender: 'Masculino',
                breed: 'Beagle',
                photoUrl: 'https://images.unsplash.com/photo-1518887499460-71d222eed89d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        ]
        setPets(examplePets);
    }, [])


    return (
        <Container>
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
                        href="#pet-form"
                    >
                        Comece Agora
                    </Button>
                </Box>
            </Box>

            {/* Formulário de Cadastro de Pets */}
            <Box id="list-pets" sx={{ mt: 6, padding: 2 }}>
                {/* <PetForm /> */}

            </Box>

            {/* Lista de Pets */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>

                {pets.map((pet, index) => {

                    return (
                        <PetCard
                            key={index}
                            pet={pet}
                            onEdit={handleEdit} onDelete={handleDelete}
                        />
                    )
                })}


            </Box>
        </Container>
    );

}


export default Home;