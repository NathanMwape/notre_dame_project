import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  FaCalendarAlt,
  FaClipboardList,
  FaHeartbeat,
  FaTasks,
  FaUserMd,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { supabase } from "../supabaise-config/supabaiseClient";

export const DoctorDashboard = () => {
  // Sample data for the line chart
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Consultations",
        data: [50, 60, 70, 65, 80, 90, 100],
        fill: false,
        borderColor: "#1976d2",
      },
    ],
  };

  const [doctorName, setDoctorName] = useState("Chargement...");
  const [ordonnacesCount, setOrdonnancesCount] = useState("Chargement...");
  const [patientsCount, setPatientsCount] = useState("Chargement...");
  const [consultationsTodayCount, setConsultationsTodayCount] =
    useState("Chargement...");

  useEffect(() => {
    const fetchDoctorName = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const email = user.email;
        const { data: doctorData, error } = await supabase
          .from("Medecin")
          .select("prenom, nom")
          .eq("email", email)
          .single();
        if (!error && doctorData) {
          setDoctorName(`${doctorData.prenom} ${doctorData.nom}`);
        }
      }
    };

    const fetchPatientsCount = async () => {
      const { count, error } = await supabase
        .from("Patient")
        .select("*", { count: "exact" });
      if (!error && count !== null) {
        setPatientsCount(count);
      }
    };
    const fetchOrdonnancesCount = async () => {
      const { count, error } = await supabase
        .from("Ordonnance")
        .select("*", { count: "exact" });
      if (!error && count !== null) {
        setOrdonnancesCount(count);
      }
    };

    const fetchConsultationsToday = async () => {
      const today = new Date().toISOString().slice(0, 10);
      const { count, error } = await supabase
        .from("Consultation")
        .select("*", { count: "exact" })
        .eq("date", today);
      if (!error && count !== null) {
        setConsultationsTodayCount(count);
      }
    };

    fetchDoctorName();
    fetchPatientsCount();
    fetchOrdonnancesCount();
    fetchConsultationsToday();
  }, []);

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
        Bienvenue, Dr. {doctorName}
      </Typography>

      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#1976d2" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#1976d2" }}>
                Consultations Aujourd'hui
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#1976d2" }}
              >
                {consultationsTodayCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#388e3c" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#388e3c" }}>
                Patients Actuels
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#388e3c" }}
              >
                {patientsCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#d32f2f" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#d32f2f" }}>
                Nombre d'ordonnance
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#d32f2f" }}
              >
                {ordonnacesCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={3}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#ffa000" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#ffa000" }}>
                Messages non lus
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#ffa000" }}
              >
                5
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
        <Grid xs={12} md={3}>
          <NavLink to={"/patients"} style={{ textDecoration: "none" }}>
            <Button
              startDecorator={<FaUserMd />}
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
          </NavLink>
        </Grid>
        <Grid xs={12} md={3}>
          <NavLink to={"/consultations"} style={{ textDecoration: "none" }}>
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
              Voir les Consultations
            </Button>
          </NavLink>
        </Grid>
        <Grid xs={12} md={3}>
          <NavLink to={"/planning"} style={{ textDecoration: "none" }}>
            <Button
              startDecorator={<FaCalendarAlt />}
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
              Voir le Planning
            </Button>
          </NavLink>
        </Grid>
        <Grid xs={12} md={3}>
          <NavLink to={"/taches"} style={{ textDecoration: "none" }}>
            <Button
              startDecorator={<FaTasks />}
              variant="solid"
              color="primary"
              fullWidth
              sx={{
                p: 2,
                backgroundColor: "#ffa000",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Mes Tâches
            </Button>
          </NavLink>
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
        Performance des Consultations
      </Typography>
      <Card
        variant="outlined"
        sx={{ boxShadow: "lg", mb: 4, borderColor: "#1976d2" }}
      >
        <CardContent>
          <Line data={data} />
        </CardContent>
      </Card>

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
              Vous avez une nouvelle consultation prévue à 14h00.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 12:00
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
              Le patient John Doe a annulé son rendez-vous.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 10:00
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "lg",
            bgcolor: "white",
            mb: 2,
            borderColor: "#ffa000",
          }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#ffa000" }}>
              Nouveau message de Alice Smith : "Je voudrais reprogrammer mon
              rendez-vous..."
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-19 18:30
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Tâches à accomplir
      </Typography>
      <Stack spacing={2}>
        <Card
          variant="outlined"
          sx={{ boxShadow: "lg", bgcolor: "white", borderColor: "#388e3c" }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#388e3c" }}>
              Préparer les dossiers des patients pour les consultations de
              demain.
            </Typography>
            <Typography level="body2" color="textSecondary">
              Échéance : 2024-05-19 17:00
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{ boxShadow: "lg", bgcolor: "white", borderColor: "#1976d2" }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#1976d2" }}>
              Répondre aux messages des patients.
            </Typography>
            <Typography level="body2" color="textSecondary">
              Échéance : 2024-05-20 16:00
            </Typography>
          </CardContent>
        </Card>
      </Stack>
      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Statistiques de Santé
      </Typography>
      <Box sx={{ mb: 4 }}>
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
              Taux de patients satisfaits: 95%
            </Typography>
            <Typography level="body2" color="textSecondary">
              Mise à jour: 2024-05-19
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
              Nombre de nouveaux patients ce mois: 12
            </Typography>
            <Typography level="body2" color="textSecondary">
              Mise à jour: 2024-05-19
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Liens Utiles
      </Typography>
      <Box sx={{ mb: 4 }}>
        <NavLink to={"/taches"} style={{ textDecoration: "none" }}>
          <Button
            startDecorator={<FaTasks />}
            variant="solid"
            color="primary"
            fullWidth
            sx={{
              p: 2,
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
              mb: 2,
            }}
          >
            Gérer les Tâches
          </Button>
        </NavLink>

        <Button
          startDecorator={<FaHeartbeat />}
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
          Statistiques de Santé
        </Button>
      </Box>
    </Sheet>
  );
};
