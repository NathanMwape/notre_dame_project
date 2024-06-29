import { Button, Input, Option, Select, Stack, Typography } from "@mui/joy";
import React, { useState } from "react";
import { createUserProfil } from "../../../data-fetching/dataCreating";
import { supabase } from "../../../supabaise-config/supabaiseClient";

export const AddUserForm = ({ handleCloseModal }) => {
  const [loadingCreation, setLoadingCreation] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const createUserProfilAdmin = async (nom, prenom, email, role) => {
    switch (role) {
      case "medecin":
        return await createUserProfil(nom, prenom, email, "Medecin");
        break;
      case "pharmacien":
        return await createUserProfil(nom, prenom, email, "Pharmacien");
        break;
      case "infirmier":
        return await createUserProfil(nom, prenom, email, "Infirmier");
        break;
      case "caissier":
        return await createUserProfil(nom, prenom, email, "Caissier");
        break;
      case "receptionniste":
        return await createUserProfil(nom, prenom, email, "Receptionniste");
        break;

      default:
        break;
    }
  };

  const createUserAdmin = async (email, password, role, nom, prenom) => {
    const { data, error } = await supabase.auth.admin.createUser({
      email: email,
      password: password,
      email_confirm: true,
      user_metadata: { role: role },
    });

    if (data) {
      const dataCreated = await createUserProfilAdmin(nom, prenom, email, role);
      if (dataCreated) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingCreation(true);
    const form = e.target;
    const data = await createUserAdmin(
      form.email.value,
      form.password.value,
      selectedRole,
      form.nom.value,
      form.prenom.value
    );
    if (data) {
      setLoadingCreation(false);
      handleCloseModal();
    }
  };
  return (
    <Stack component={"form"} onSubmit={handleSubmit} spacing={2}>
      <Typography level="title-lg">Ajouter une utilisateur</Typography>
      <Stack spacing={1}>
        <Input
          required
          name="nom"
          sx={{ bgcolor: "Background" }}
          placeholder="Nom de l'utilisateur"
        />
        <Input
          required
          name="prenom"
          sx={{ bgcolor: "Background" }}
          placeholder="Prenom de l'utilisateur"
        />
        <Input
          required
          name="email"
          sx={{ bgcolor: "Background" }}
          placeholder="Email de l'utilisateur"
        />
        <Input
          required
          name="password"
          type="password"
          sx={{ bgcolor: "Background" }}
          placeholder="Mot de passe de l'utilisateur "
        />
        <Select
          required
          value={selectedRole}
          onChange={(e, newValue) => setSelectedRole(newValue)}
          name="role"
          sx={{
            bgcolor: "Background",
          }}
          placeholder="Choisir un rôle"
          slotProps={{
            listbox: {
              sx: {
                zIndex: 10000,
              },
            },
          }}
        >
          <Option value={"medecin"}>Médecin</Option>
          <Option value={"pharmacien"}>Pharmacien</Option>
          <Option value={"infirmier"}>Infirmier</Option>
          <Option value={"caissier"}>Caissier</Option>
          <Option value={"receptionniste"}>Receptionniste</Option>
        </Select>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Button
          disabled={loadingCreation}
          onClick={() => handleCloseModal()}
          fullWidth
          variant="soft"
          color="danger"
        >
          Annuler
        </Button>
        <Button loading={loadingCreation} type="submit" fullWidth>
          Confirmer
        </Button>
      </Stack>
    </Stack>
  );
};
