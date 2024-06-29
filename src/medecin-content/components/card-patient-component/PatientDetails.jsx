import {
  Avatar,
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/joy";
import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowUp,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import { supabase } from "../../../supabaise-config/supabaiseClient";
import "../../../assets/animation.css";

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [ordonnances, setOrdonnances] = useState([]);
  const [consultations, setConsultations] = useState([]);
  const [showAllOrdonnances, setShowAllOrdonnances] = useState(false);
  const [showAllConsultations, setShowAllConsultations] = useState(false);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      const { data: patientData, error: patientError } = await supabase
        .from("Patient")
        .select("*")
        .eq("id", id)
        .single();

      const { data: ordonnancesData, error: ordonnancesError } = await supabase
        .from("Ordonnance")
        .select("*")
        .eq("patient_id", id);

      const { data: consultationsData, error: consultationsError } =
        await supabase.from("Consultation").select("*").eq("patient_id", id);

      if (patientError || ordonnancesError || consultationsError) {
        console.error(
          "Erreur de chargement des détails du patient :",
          patientError || ordonnancesError || consultationsError
        );
      } else {
        setPatient(patientData);
        setOrdonnances(ordonnancesData);
        setConsultations(consultationsData);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (!patient) return <div>Chargement...</div>;

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={3}>
        <Card sx={{ bgcolor: "Background" }}>
          <Stack alignItems={"center"} spacing={1}>
            <Avatar sx={{ "--Avatar-size": "5rem" }} />
            <Typography level="title-md" fontWeight={"bold"}>
              {patient.nom} {patient.prenom}
            </Typography>
          </Stack>
          <Divider sx={{ bgcolor: "rgb(0,0,0, 0.6)", mx: 0.5 }} />
          <Stack spacing={1}>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography level="body-sm" fontWeight={"bold"}>
                Sexe
              </Typography>
              <Typography level="body-sm" fontWeight={"lg"}>
                {patient.sexe}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography level="body-sm" fontWeight={"bold"}>
                Âge
              </Typography>
              <Typography level="body-sm" fontWeight={"lg"}>
                {patient.age}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography level="body-sm" fontWeight={"bold"}>
                Date de Naissance
              </Typography>
              <Typography level="body-sm" fontWeight={"lg"}>
                {new Date(patient.date_naissance).toLocaleDateString()}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography level="body-sm" fontWeight={"bold"}>
                Lieu de Naissance
              </Typography>
              <Typography level="body-sm" fontWeight={"lg"}>
                {patient.lieu_naissance}
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography level="body-sm" fontWeight={"bold"}>
                État Civil
              </Typography>
              <Typography level="body-sm" fontWeight={"lg"}>
                {patient.etat_civil}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <FaPhoneAlt />
              </Box>
              <Typography level="body-sm" fontWeight={"lg"}>
                {patient.telephone}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={1}
            >
              <Box>
                <MdPlace />
              </Box>
              <Typography level="body-sm" fontWeight={"lg"}>
                {patient.adresse}
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={12} lg={9} spacing={3}>
        <Card sx={{ bgcolor: "Background", position: "relative" }}>
          <Typography level="title-md" fontWeight={"lg"}>
            <NavLink to={"/patients"}>
              <FaArrowLeft style={{ marginRight: "12px" }} />
            </NavLink>
            Ordonnances Médicales
          </Typography>
          <div className={showAllOrdonnances ? "slide-down" : "slide-up"}>
            {ordonnances
              .slice(0, showAllOrdonnances ? ordonnances.length : 0)
              .map((ordonnance) => (
                <div key={ordonnance.id}>
                  <Typography>{ordonnance.medicament}</Typography>
                  <Typography>{ordonnance.posologie}</Typography>
                  <Typography>
                    {new Date(
                      ordonnance.date_prescription
                    ).toLocaleDateString()}
                  </Typography>
                  <hr />
                </div>
              ))}
          </div>
          {ordonnances.length > 0 && (
            <IconButton
              onClick={() => setShowAllOrdonnances(!showAllOrdonnances)}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <FaArrowDown
                className={showAllOrdonnances ? "rotate-down" : "rotate-up"}
              />
            </IconButton>
          )}
        </Card>
        <Card sx={{ bgcolor: "Background", mt: 2, position: "relative" }}>
          <Typography level="title-md" fontWeight={"lg"}>
            Consultations
          </Typography>
          <div className={showAllConsultations ? "slide-down" : "slide-up"}>
            {consultations
              .slice(0, showAllConsultations ? consultations.length : 0)
              .map((consultation) => (
                <div key={consultation.id}>
                  <Typography>
                    {new Date(consultation.date).toLocaleDateString()}
                  </Typography>
                  <Typography>{consultation.motif}</Typography>
                  <Typography>{consultation.diagnostique}</Typography>
                </div>
              ))}
          </div>
          {consultations.length > 0 && (
            <IconButton
              onClick={() => setShowAllConsultations(!showAllConsultations)}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <FaArrowDown
                className={showAllConsultations ? "rotate-down" : "rotate-up"}
              />
            </IconButton>
          )}
        </Card>
      </Grid>
    </Grid>
  );
};

export default PatientDetails;
