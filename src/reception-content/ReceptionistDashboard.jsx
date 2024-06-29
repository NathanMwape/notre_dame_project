import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Sheet,
  Typography,
} from "@mui/joy";
import { FaUserPlus, FaClipboardList, FaCalendarCheck } from "react-icons/fa";

export const ReceptionistDashboard = () => {
  return (
    <Sheet
      sx={{ bgcolor: "#f4f6f8", p: 4, borderRadius: "md", boxShadow: "lg" }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Bienvenue à la Réception
      </Typography>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Actions Rapides
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={4}>
          <Button
            startDecorator={<FaUserPlus />}
            variant="solid"
            color="primary"
            fullWidth
            sx={{
              p: 2,
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Enregistrer un Nouveau Patient
          </Button>
        </Grid>
        <Grid xs={12} md={4}>
          <Button
            startDecorator={<FaClipboardList />}
            variant="solid"
            color="primary"
            fullWidth
            sx={{
              p: 2,
              backgroundColor: "#388e3c",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Gérer les Rendez-vous
          </Button>
        </Grid>
        <Grid xs={12} md={4}>
          <Button
            startDecorator={<FaCalendarCheck />}
            variant="solid"
            color="primary"
            fullWidth
            sx={{
              p: 2,
              backgroundColor: "#d32f2f",
              color: "white",
              borderRadius: "8px",
            }}
          >
            Vérifier les Disponibilités
          </Button>
        </Grid>
      </Grid>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Notifications Récentes
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "lg",
            bgcolor: "white",
            mb: 2,
            borderColor: "#1976d2",
          }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#1976d2" }}>
              Le patient Jane Doe a été enregistré avec succès.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 09:30
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "lg",
            bgcolor: "white",
            mb: 2,
            borderColor: "#d32f2f",
          }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#d32f2f" }}>
              Le rendez-vous de Mr. John Smith kasadi a été annulé
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 08:45
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Sheet>
  );
};
