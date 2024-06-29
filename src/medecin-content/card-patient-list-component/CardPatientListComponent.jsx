import { Button, Card, Grid, Input, Typography } from "@mui/joy";
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import ModalPatient from "../../dashboard/components/sidebars/sidebar-receptionniste/ModalPatient";
import { CardPatientComponent } from "../components/card-patient-component/CardPatientComponent";
import { dataReading } from "../../data-fetching/dataReading"; // Import de la fonction getProfils

export const CardPatientListComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const data = await dataReading();
    if (data) {
      setPatients(data);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    fetchPatients(); // Re-fetch patients after closing the modal
  };

  return (
    <>
      <Grid container>
        <Card sx={{ bgcolor: "Background" }}>
          <Typography level="h4" fontFamily={"sans-serif"}>
            LISTE DES PATIENTS
          </Typography>
          <div style={{ display: "inline-flex" }}>
            <Input
              color="neutral"
              placeholder="Rechercher....."
              startDecorator={
                <Button variant="soft" startDecorator={<FaSearch />}></Button>
              }
              sx={{ width: 300, background: "white" }}
            />{" "}
            <Button sx={{ marginLeft: "200px" }} onClick={handleOpenModal}>
              Ajouter
            </Button>
          </div>
        </Card>
      </Grid>
      <Grid container spacing={2}>
        {patients.map((patient) => (
          <Grid item xs={12} sm={6} md={3}>
            <CardPatientComponent patient={patient} />
          </Grid>
        ))}
      </Grid>
      <ModalPatient open={openModal} onClose={handleCloseModal} />
    </>
  );
};
