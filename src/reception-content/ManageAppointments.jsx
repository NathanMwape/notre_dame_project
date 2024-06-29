import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";

const appointmentsData = [
  {
    id: 1,
    patient: "John Doe",
    date: "2024-05-21",
    time: "10:00 AM",
    doctor: "Dr. Smith",
  },
  {
    id: 2,
    patient: "Jane Doe",
    date: "2024-05-21",
    time: "11:00 AM",
    doctor: "Dr. Brown",
  },
  // Add more sample data as needed
];

export const ManageAppointments = () => {
  const [appointments, setAppointments] = useState(appointmentsData);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleEdit = (id) => {
    // Add edit functionality
    console.log(`Edit appointment with id ${id}`);
  };

  const handleDelete = (id) => {
    // Add delete functionality
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleAdd = () => {
    // Add new appointment functionality
    console.log("Add new appointment");
  };

  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.patient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.doctor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.date.includes(searchQuery) ||
      appointment.time.includes(searchQuery)
  );

  return (
    <Sheet
      sx={{
        p: 4,
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        boxShadow: "#fff0",
      }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Gérer les Rendez-vous
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 4, alignItems: "center" }}>
        <Input
          startDecorator={<FaSearch />}
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={handleSearch}
          sx={{
            flexGrow: 1,
            backgroundColor: "#ffffff",
            border: "1px solid #1976d2",
            borderRadius: "4px",
          }}
        />
        <Button
          startDecorator={<FaPlus />}
          variant="solid"
          color="primary"
          onClick={handleAdd}
          sx={{
            backgroundColor: "#1976d2",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Ajouter
        </Button>
      </Stack>

      <List>
        {filteredAppointments.map((appointment) => (
          <ListItem key={appointment.id} sx={{ mb: 2 }}>
            <Card sx={{ width: "100%", boxShadow: 3, borderRadius: "8px" }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <Typography
                      level="h6"
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      {appointment.patient}
                    </Typography>
                    <Typography level="body2" color="text.secondary">
                      Patient
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography
                      level="h6"
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      {appointment.date}
                    </Typography>
                    <Typography level="body2" color="text.secondary">
                      Date
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      level="h6"
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      {appointment.time}
                    </Typography>
                    <Typography level="body2" color="text.secondary">
                      Heure
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography
                      level="h6"
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      {appointment.doctor}
                    </Typography>
                    <Typography level="body2" color="text.secondary">
                      Docteur
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Stack direction="row" spacing={1}>
                      <IconButton
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEdit(appointment.id)}
                        sx={{ borderColor: "#ffff", color: "#fffff" }}
                      >
                        <FaEdit />
                      </IconButton>
                      <IconButton
                        variant="outlined"
                        color="danger"
                        onClick={() => handleDelete(appointment.id)}
                        sx={{ borderColor: "#d32f2f", color: "#d32f2f" }}
                      >
                        <FaTrash />
                      </IconButton>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Sheet>
  );
};
