import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  ModalClose,
  Option,
  Select,
  Sheet,
  Stack,
  Textarea,
  Typography,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaise-config/supabaiseClient"; // Assurez-vous que ce chemin est correct

const ModalConsultation = ({ open, onClose }) => {
  const [patients, setPatients] = useState([]);
  const [patient_id, setPatientId] = useState("");
  const [situation, setSituation] = useState("");
  const [antecedents, setAntecedents] = useState("");
  const [motif, setMotif] = useState("");
  const [examenClinique, setExamenClinique] = useState("");
  const [examensBiologiques, setExamensBiologiques] = useState("");
  const [examensRadiologiques, setExamensRadiologiques] = useState("");
  const [diagnostique, setDiagnostique] = useState("");
  const [traitement, setTraitement] = useState("");

  useEffect(() => {
    const loadPatients = async () => {
      const { data, error } = await supabase.from("Patient").select("*");
      if (error) {
        console.error("Erreur de chargement des patients :", error);
      } else {
        setPatients(data);
      }
    };

    loadPatients();
  }, []);

  const handleAddConsultation = async () => {
    const patientId = parseInt(patient_id, 10);
    if (isNaN(patientId)) {
      alert("Invalid patient ID");
      return;
    }

    if (!patientId) {
      alert("Patient ID is required");
      return;
    }

    const { data, error } = await supabase.from("Consultation").insert([
      {
        patient_id: patientId,
        situation: situation,
        antecedents: antecedents,
        motif: motif,
        examen_clinique: examenClinique,
        examens_biologiques: examensBiologiques,
        examens_radiologiques: examensRadiologiques,
        diagnostique: diagnostique,
        traitement: traitement,
      },
    ]);

    if (error) {
      console.error("Erreur d'ajout de la consultation :", error);
    } else {
      console.log("Consultation ajoutée avec succès :", data);
      onClose();
    }
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
          maxWidth: 700,
          width: 700,
          borderRadius: "xl",
          p: 3,
          pb: 3,
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
          Ajouter une consultation
        </Typography>

        <Box component="form" sx={{ maxHeight: "64vh", overflow: "auto" }}>
          <Stack spacing={2}>
            <Grid container spacing={1}>
              <Grid xs={6} md={6}>
                <FormControl required>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Nom du Patient
                  </FormLabel>
                  <Select
                    value={patient_id}
                    onChange={(e, value) => setPatientId(value)}
                    placeholder="Sélectionner un patient"
                    sx={{ background: "white" }}
                  >
                    {patients.map((patient) => (
                      <Option key={patient.id} value={patient.id}>
                        {patient.nom} {patient.prenom}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
                <input type="hidden" value={patient_id} />
              </Grid>
              <Grid xs={6} md={6}>
                <FormControl required>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Situation
                  </FormLabel>
                  <Select
                    value={situation}
                    onChange={(e, value) => setSituation(value)}
                    placeholder="Sélectionner"
                    sx={{ background: "white" }}
                  >
                    <Option value="NORMAL">NORMAL</Option>
                    <Option value="IMPORTANT">IMPORTANT</Option>
                    <Option value="URGENTE">URGENTE</Option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1.5}>
              <Grid xs={12} md={12}>
                <FormControl required>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Antécédents médicaux
                  </FormLabel>
                  <Textarea
                    value={antecedents}
                    onChange={(e) => setAntecedents(e.target.value)}
                    minRows={4}
                    style={{ background: "white", width: "100%" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={12}>
                <FormControl>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Motif de consultation
                  </FormLabel>
                  <Textarea
                    value={motif}
                    onChange={(e) => setMotif(e.target.value)}
                    minRows={1}
                    style={{ background: "white", width: "100%" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={12}>
                <FormControl>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Examen clinique
                  </FormLabel>
                  <Textarea
                    value={examenClinique}
                    onChange={(e) => setExamenClinique(e.target.value)}
                    minRows={4}
                    style={{ background: "white", width: "100%" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={12}>
                <FormControl>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Examens Biologiques
                  </FormLabel>
                  <Textarea
                    value={examensBiologiques}
                    onChange={(e) => setExamensBiologiques(e.target.value)}
                    minRows={4}
                    style={{ background: "white", width: "100%" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={12}>
                <FormControl>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Examens Radiologiques
                  </FormLabel>
                  <Textarea
                    value={examensRadiologiques}
                    onChange={(e) => setExamensRadiologiques(e.target.value)}
                    minRows={4}
                    style={{ background: "white", width: "100%" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={12}>
                <FormControl>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Diagnostique
                  </FormLabel>
                  <Textarea
                    value={diagnostique}
                    onChange={(e) => setDiagnostique(e.target.value)}
                    minRows={1}
                    style={{ background: "white", width: "100%" }}
                  />
                  ```jsx
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} md={12}>
                <FormControl>
                  <FormLabel
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    Traitement
                  </FormLabel>
                  <Textarea
                    value={traitement}
                    onChange={(e) => setTraitement(e.target.value)}
                    minRows={4}
                    style={{ background: "white", width: "100%" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Stack>
        </Box>
        <div>
          <Button
            type="button"
            variant="solid"
            color="neutral"
            style={{ margin: "5px" }}
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button
            type="button"
            variant="solid"
            color="primary"
            style={{ margin: "5px" }}
            onClick={handleAddConsultation}
          >
            Ajouter
          </Button>
        </div>
      </Sheet>
    </Modal>
  );
};

export default ModalConsultation;
