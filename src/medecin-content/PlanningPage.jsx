import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Sheet,
  Typography,
} from "@mui/joy";
import { FaCalendarAlt } from "react-icons/fa";

export const PlanningPage = () => {
  const planning = [
    {
      date: "2024-05-20",
      time: "10:00",
      patient: "John Doe",
      description: "Consultation Générale",
    },
    {
      date: "2024-05-21",
      time: "12:00",
      patient: "Alice Smith",
      description: "Suivi Médical",
    },
    {
      date: "2024-05-22",
      time: "14:00",
      patient: "Michael Kadima",
      description: "Examen Complet",
    },
    // Ajoutez plus de données si nécessaire
  ];

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
        Mon Planning
      </Typography>
      <Grid container spacing={4}>
        {planning.map((item, index) => (
          <Grid key={index} xs={12} md={4}>
            <Card
              variant="outlined"
              sx={{
                boxShadow: "lg",
                bgcolor: "#e3f2fd",
                borderColor: "#1976d2",
              }}
            >
              <CardContent>
                <Typography level="h5" sx={{ mb: 1, color: "#1976d2" }}>
                  <FaCalendarAlt style={{ marginRight: "8px" }} />
                  {item.date} à {item.time}
                </Typography>
                <Typography level="h6" sx={{ color: "#1976d2" }}>
                  {item.patient}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography level="body2" sx={{ color: "#1976d2" }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Sheet>
  );
};

export default PlanningPage;
