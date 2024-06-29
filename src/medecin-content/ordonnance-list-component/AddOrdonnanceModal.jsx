import React, { useState, useEffect } from "react";
import { Modal, Sheet, Button, Input, Typography, ModalClose } from "@mui/joy";
import { supabase } from "../../supabaise-config/supabaiseClient";

const AddOrdonnanceModal = ({ isOpen, handleClose, handleAddOrdonnance }) => {
  const [patients, setPatients] = useState([]);
  const [ordonnance, setOrdonnance] = useState({
    date_prescription: "",
    medicament: "",
    posologie: "",
    patient_id: "",
  });

  useEffect(() => {
    const fetchPatients = async () => {
      const { data, error } = await supabase
        .from("Patient")
        .select("id, nom, prenom");
      if (error) {
        console.error("Erreur de chargement des patients :", error);
      } else {
        setPatients(data);
      }
    };

    fetchPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrdonnance({ ...ordonnance, [name]: value });
  };

  const handleSubmit = () => {
    handleAddOrdonnance({
      ...ordonnance,
      date_prescription: new Date(ordonnance.date_prescription)
        .toISOString()
        .split("T")[0],
    });
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: {
            xs: "85%",
            md: "40%",
          },
          maxWidth: {
            xs: "85%",
            md: "40%",
          },
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          bgcolor: "Background",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography level="h5" fontWeight="bold" textAlign="center" mb={2}>
          Ajouter une Ordonnance
        </Typography>
        <Input
          placeholder="Date de prescription"
          name="date_prescription"
          type="date"
          value={ordonnance.date_prescription}
          onChange={handleChange}
          sx={{ mb: 2 }}
          style={{ background: "white" }}
        />
        <Input
          placeholder="Médicament"
          name="medicament"
          value={ordonnance.medicament}
          onChange={handleChange}
          sx={{ mb: 2 }}
          style={{ background: "white" }}
        />
        <Input
          placeholder="Posologie"
          name="posologie"
          value={ordonnance.posologie}
          onChange={handleChange}
          sx={{ mb: 2 }}
          style={{ background: "white" }}
        />
        <select
          name="patient_id"
          value={ordonnance.patient_id}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "16px",
            background: "white",
          }}
        >
          <option value="">Sélectionner un patient</option>
          {patients.map((patient) => (
            <option key={patient.id} value={patient.id}>
              {patient.nom} {patient.prenom}
            </option>
          ))}
        </select>
        <Button onClick={handleSubmit} sx={{ mt: 2 }}>
          Ajouter
        </Button>
      </Sheet>
    </Modal>
  );
};

export default AddOrdonnanceModal;
