import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";

export const CardPatientComponent = ({ patient }) => {
  return (
    <Box>
      <Card sx={{ bgcolor: "Background" }}>
        <Stack alignItems={"center"} spacing={1}>
          <Avatar
            sx={{
              "--Avatar-size": "4.8rem",
            }}
          />
          <Stack>
            <Typography
              level="title-md"
              fontWeight={"bold"}
              textAlign={"center"}
            >
              {patient.nom} {patient.prenom}
            </Typography>
            <Typography level="body-sm" textAlign={"center"}>
              Profession: {patient.profession}
            </Typography>
            <Typography level="body-sm" textAlign={"center"}>
              Téléphone: {patient.telephone}
            </Typography>
            <Typography level="body-sm" textAlign={"center"}>
              Adresse: {patient.adresse}
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} width={"70%"}>
            <Stack alignItems={"center"}>
              <Typography level="body-sm" textAlign="center">
                Chambre
              </Typography>
              <Typography level="h3" textAlign="center">
                120
              </Typography>
            </Stack>
            <Stack alignItems={"center"}>
              <Typography level="body-sm" textAlign="center">
                Montant
              </Typography>
              <Typography level="h3" textAlign="center">
                $50
              </Typography>
            </Stack>
          </Stack>
          <NavLink to={`/patient/${patient.id}`} style={{ width: "100%" }}>
            <Button fullWidth size="sm" variant="soft">
              Détails
            </Button>
          </NavLink>
        </Stack>
      </Card>
    </Box>
  );
};
