import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Sheet,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemDecorator,
  ListItemContent,
} from "@mui/joy";
import { FaUserNurse, FaClipboardList, FaBell } from "react-icons/fa";

export const InfirmierDashboard = () => {
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
        Bienvenue, Infirmier/ère [Nom]
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#1976d2" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#1976d2" }}>
                Patients à voir Aujourd'hui
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#1976d2" }}
              >
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#388e3c" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#388e3c" }}>
                Tâches Assignées
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#388e3c" }}
              >
                7
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#d32f2f" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#d32f2f" }}>
                Notifications Récentes
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#d32f2f" }}
              >
                3
              </Typography>
            </CardContent>
          </Card>
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
        Navigation Rapide
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={4}>
          <Button
            startDecorator={<FaUserNurse />}
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
            Gérer les Patients
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
            Voir les Tâches
          </Button>
        </Grid>
        <Grid xs={12} md={4}>
          <Button
            startDecorator={<FaBell />}
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
            Voir les Notifications
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
      <Box>
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
              Nouveau patient assigné à la chambre 204.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 08:00
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
              Urgence: patient nécessitant des soins immédiats en chambre 302.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 09:00
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "lg",
            bgcolor: "white",
            mb: 2,
            borderColor: "#388e3c",
          }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#388e3c" }}>
              Consultation avec le Dr. Smith à 11:00 AM.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 10:00
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Sheet>
  );
};

export default InfirmierDashboard;
