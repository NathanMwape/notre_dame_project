import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalClose,
  Option,
  Select,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import { createProfil } from "../../../../data-fetching/dataCreating";

const ModalPatient = ({ open, onClose }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [lieuNaissance, setLieuNaissance] = useState("");
  const [sexe, setSexe] = useState("");
  const [age, setAge] = useState("");
  const [adresse, setAdresse] = useState("");
  const [etatCivil, setEtatCivil] = useState("");
  const [nombreEnfants, setNombreEnfants] = useState("");
  const [profession, setProfession] = useState("");
  const [poids, setPoids] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await createProfil(
      nom,
      prenom,
      telephone,
      dateNaissance,
      lieuNaissance,
      sexe,
      age,
      adresse,
      etatCivil,
      nombreEnfants,
      profession,
      poids
    );

    if (error) {
      console.error("Erreur lors de l'insertion des données :", error);
      alert(
        "Erreur lors de l'ajout des données. Vérifiez la console pour plus de détails."
      );
    } else {
      console.log("Données insérées avec succès :", data);
      alert("Patient ajouté avec succès !");
    }

    onClose();
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          maxWidth: 600,
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          backgroundColor: "white",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} onClick={onClose} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          fontWeight="xl"
          mb={1}
          fontFamily={"sans-serif"}
        >
          Ajouter un nouveau patient
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={0.5}>
            <Grid container spacing={1}>
              <Grid xs={4} md={5}>
                <FormControl required>
                  <FormLabel>Nom & PostNom</FormLabel>
                  <Input
                    placeholder="Nom & Postnom"
                    sx={{ background: "white" }}
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={4} md={3}>
                <FormControl required>
                  <FormLabel>Prénom</FormLabel>
                  <Input
                    placeholder="Prénom"
                    sx={{ background: "white" }}
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={4} md={4}>
                <FormControl required>
                  <FormLabel>N0 Telephone</FormLabel>
                  <Input
                    type="number"
                    placeholder="0"
                    sx={{ background: "white" }}
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={4} md={4}>
                <FormControl required>
                  <FormLabel>Date de naissance</FormLabel>
                  <Input
                    type="date"
                    sx={{ background: "white" }}
                    value={dateNaissance}
                    onChange={(e) => setDateNaissance(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={4} md={3}>
                <FormControl required>
                  <FormLabel>Lieu de naissance</FormLabel>
                  <Input
                    placeholder="Lieu"
                    sx={{ background: "white" }}
                    value={lieuNaissance}
                    onChange={(e) => setLieuNaissance(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={2.8}>
                <FormControl required>
                  <FormLabel>Sexe</FormLabel>
                  <Select
                    placeholder="Sélectionner"
                    sx={{ background: "white" }}
                    value={sexe}
                    onChange={(e, newValue) => setSexe(newValue)}
                  >
                    <Option value="masculin">Masculin</Option>
                    <Option value="feminin">Féminin</Option>
                    <Option value="autre">Autre</Option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid xs={12} md={2}>
                <FormControl required>
                  <FormLabel>Âge</FormLabel>
                  <Input
                    type="number"
                    sx={{ background: "white" }}
                    placeholder="Âge"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={6}>
                <FormControl required>
                  <FormLabel>Adresse</FormLabel>
                  <Input
                    placeholder="Adresse"
                    sx={{ background: "white" }}
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl required>
                  <FormLabel>État civil</FormLabel>
                  <Select
                    placeholder="Sélectionner"
                    sx={{ background: "white" }}
                    value={etatCivil}
                    onChange={(e, newValue) => setEtatCivil(newValue)}
                  >
                    <Option value="celibataire">Célibataire</Option>
                    <Option value="marie">Marié(e)</Option>
                    <Option value="divorce">Divorcé(e)</Option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={6}>
                <FormControl required>
                  <FormLabel>Nombre d'enfants</FormLabel>
                  <Input
                    type="number"
                    placeholder="Nombre d'enfants"
                    sx={{ background: "white" }}
                    value={nombreEnfants}
                    onChange={(e) => setNombreEnfants(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid xs={12} md={6}>
                <FormControl required>
                  <FormLabel>Profession</FormLabel>
                  <Input
                    placeholder="Profession"
                    sx={{ background: "white" }}
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <FormControl required>
                  <FormLabel>Poids (kg)</FormLabel>
                  <Input
                    type="number"
                    placeholder="Poids"
                    sx={{ background: "white" }}
                    value={poids}
                    onChange={(e) => setPoids(e.target.value)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button type="submit" variant="solid" color="primary">
              Ajouter
            </Button>
          </Stack>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default ModalPatient;
