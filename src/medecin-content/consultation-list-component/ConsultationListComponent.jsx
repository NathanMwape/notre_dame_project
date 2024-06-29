import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalClose,
  Sheet,
  Table,
  Typography,
} from "@mui/joy";
import { FaSearch, FaTrash } from "react-icons/fa";
import { ConsultationItemComponent } from "../components/consultation-item-component/ConsultationItemComponent";
import ModalConsultation from "./ModalConsultation";
import { supabase } from "../../supabaise-config/supabaiseClient";

export const ConsultationListComponent = () => {
  const [openModal, setOpenModal] = useState({
    statut: false,
    type: null,
    data: null,
  });
  const [consultations, setConsultations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadConsultations = async () => {
      const { data, error } = await supabase
        .from("Consultation")
        .select("*, Patient(nom, prenom, sexe)");
      if (error) {
        console.error("Erreur de chargement des consultations :", error);
      } else {
        setConsultations(data);
      }
    };

    loadConsultations();
  }, []);

  const filteredConsultations = consultations
    .filter((consultation) =>
      `${consultation.Patient.nom} ${consultation.Patient.prenom} ${consultation.date} ${consultation.Patient.sexe}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .map((consultation, index) => ({
      ...consultation,
      displayId: index + 1,
    }));

  const handleOpenModal = (type, data = null) => {
    setOpenModal({ statut: true, type, data });
  };

  const handleCloseModal = () => {
    setOpenModal({ statut: false, type: null, data: null });
  };

  const handleDeleteConsultation = async (id) => {
    const { error } = await supabase.from("Consultation").delete().eq("id", id);
    if (error) {
      console.error("Erreur lors de la suppression :", error);
    } else {
      setConsultations(consultations.filter((c) => c.id !== id));
    }
  };

  return (
    <>
      <Sheet sx={{ bgcolor: "Background" }}>
        <ModalConsultation
          open={openModal.statut && openModal.type === "add-consultation"}
          onClose={handleCloseModal}
          dossierId={openModal.data ? openModal.data.dossierId : null}
        />

        <Typography my={3} level="h4" fontWeight={"bold"} textAlign={"center"}>
          LA LISTE DES CONSULTATIONS
        </Typography>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Input
            style={{ marginRight: "30px", left: 30 }}
            color="neutral"
            placeholder="Rechercher....."
            startDecorator={
              <Button variant="soft" startDecorator={<FaSearch />}></Button>
            }
            sx={{ width: "50%", background: "white", paddingRight: 23 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            style={{ margin: "10px", height: "40px" }}
            onClick={() => handleOpenModal("add-consultation")}
          >
            Ajouter la consultation
          </Button>
        </div>
        <Table stickyHeader stripe={"odd"} hoverRow variant="soft">
          <thead>
            <tr>
              <th style={{ width: 50 }}>Id</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Date</th>
              <th style={{ width: 150 }}>Sexe</th>
              <th style={{ width: 100 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredConsultations.map((consultation) => (
              <ConsultationItemComponent
                key={consultation.id}
                consultation={consultation}
                displayId={consultation.displayId}
                nom={consultation.Patient.nom}
                prenom={consultation.Patient.prenom}
                date={consultation.date}
                sexe={consultation.Patient.sexe}
                setOpenModal={setOpenModal}
                handleDeleteConsultation={handleDeleteConsultation}
              />
            ))}
          </tbody>
        </Table>
      </Sheet>
    </>
  );
};
