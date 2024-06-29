import {
  Modal,
  ModalClose,
  Sheet,
  Table,
  Typography,
  Input,
  Button,
} from "@mui/joy";
import React, { useState, useEffect } from "react";
import { DeleteModalComponent } from "../components/delete-modal-component/DeleteModalComponent";
import { OrdonnanceItemComponent } from "../components/ordonnance-item-component/OrdonnanceItemComponent";
import OrdonnanceModal from "./OrdonnanceModal";
import AddOrdonnanceModal from "./AddOrdonnanceModal";
import EditOrdonnanceModal from "./EditOrdonnanceModal";
import { IoSearch } from "react-icons/io5";
import { supabase } from "../../supabaise-config/supabaiseClient";

export const OrdonnanceListComponent = () => {
  const [openModal, setOpenModal] = useState({
    statut: false,
    type: null,
    data: null,
  });

  const [searchText, setSearchText] = useState("");
  const [ordonnances, setOrdonnances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrdonnances = async () => {
      const { data, error } = await supabase.from("Ordonnance").select(`
          id, 
          date_prescription,
          medicament,
          posologie,
          patient:patient_id (id, nom, prenom)
        `);

      if (error) {
        console.error("Erreur de chargement des ordonnances :", error);
      } else {
        setOrdonnances(data);
      }
      setLoading(false);
    };

    fetchOrdonnances();
  }, []);

  const handleCloseModal = () => {
    setOpenModal({ statut: false, type: null, data: null });
  };

  const handleAddOrdonnance = async (newOrdonnance) => {
    const { data, error } = await supabase
      .from("Ordonnance")
      .insert([newOrdonnance]).select(`
        id, 
        date_prescription,
        medicament,
        posologie,
        patient:patient_id (id, nom, prenom)
      `);

    if (error) {
      console.error("Erreur d'ajout d'ordonnance :", error);
    } else {
      setOrdonnances([...ordonnances, data[0]]);
    }
  };

  const handleUpdateOrdonnance = async (id, updatedOrdonnance) => {
    const { data, error } = await supabase
      .from("Ordonnance")
      .update(updatedOrdonnance)
      .eq("id", id).select(`
        id, 
        date_prescription,
        medicament,
        posologie,
        patient:patient_id (id, nom, prenom)
      `);

    if (error) {
      console.error("Erreur de modification d'ordonnance :", error);
    } else {
      setOrdonnances(
        ordonnances.map((ordonnance) =>
          ordonnance.id === id ? data[0] : ordonnance
        )
      );
    }
  };

  const handleDeleteOrdonnance = async (ordonnanceId) => {
    const { error } = await supabase
      .from("Ordonnance")
      .delete()
      .eq("id", ordonnanceId);

    if (error) {
      console.error("Erreur de suppression d'ordonnance :", error);
    } else {
      setOrdonnances(
        ordonnances.filter((ordonnance) => ordonnance.id !== ordonnanceId)
      );
    }
    handleCloseModal();
  };

  const filteredOrdonnances = ordonnances.filter(
    (ordonnance) =>
      ordonnance.patient.nom.toLowerCase().includes(searchText.toLowerCase()) ||
      ordonnance.patient.prenom
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      ordonnance.date_prescription.includes(searchText)
  );

  const handleOpenAddModal = () => {
    setOpenModal({ statut: true, type: "add-ordonnance", data: null });
  };

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <>
      <Sheet
        sx={{
          bgcolor: "Background",
        }}
      >
        <Typography my={3} level="h3" fontWeight={"bold"} textAlign={"center"}>
          Ordonnances
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Input
            placeholder="Rechercher par nom, prénom ou date"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            startDecorator={<IoSearch />}
            sx={{
              width: "50%",
              marginLeft: 1,
              backgroundColor: "#f0f0f0",
              color: "#333",
              borderColor: "#ccc",
              "&:hover": {
                borderColor: "#aaa",
              },
              "&:focus-within": {
                borderColor: "#888",
              },
            }}
          />
          <Button
            style={{ marginLeft: "10px", height: "40px" }}
            onClick={handleOpenAddModal}
          >
            Ajouter une ordonnance
          </Button>
        </div>
        <Table stickyHeader stripe={"odd"} hoverRow variant="soft">
          <thead>
            <tr>
              <th style={{ width: 50 }}>Id</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Date</th>
              <th>Médicament</th>
              <th style={{ width: 50 }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredOrdonnances.map((item, index) => (
              <OrdonnanceItemComponent
                key={item.id}
                displayId={index + 1}
                id={item.id}
                nom={item.patient.nom}
                prenom={item.patient.prenom}
                date={new Date(item.date_prescription).toLocaleDateString()}
                medicament={item.medicament}
                posologie={item.posologie}
                setOpenModal={setOpenModal}
                handleDeleteOrdonnance={handleDeleteOrdonnance}
              />
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openModal.statut}
        onClose={handleCloseModal}
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
          {openModal.type === "delete-ordonnance" && (
            <DeleteModalComponent
              setOpenModal={setOpenModal}
              handleDelete={handleDeleteOrdonnance}
              ordonnanceId={openModal.data.id}
              title={"Suppression Ordonnance"}
              message={
                <Typography>
                  Voulez-vous supprimer l'Ordonnance du patient{" "}
                  <b>
                    {openModal.data.patient.nom} {openModal.data.patient.prenom}
                  </b>{" "}
                  en date du{" "}
                  <b>
                    {new Date(
                      openModal.data.date_prescription
                    ).toLocaleDateString()}
                  </b>{" "}
                  ?
                </Typography>
              }
            />
          )}
          {openModal.type === "view-ordonnance" && (
            <OrdonnanceModal
              isOpen={openModal.statut}
              handleClose={handleCloseModal}
              ordonnance={openModal.data}
            />
          )}
          {openModal.type === "edit-ordonnance" && (
            <EditOrdonnanceModal
              isOpen={openModal.statut}
              handleClose={handleCloseModal}
              ordonnance={openModal.data}
              handleUpdateOrdonnance={handleUpdateOrdonnance}
            />
          )}
          {openModal.type === "add-ordonnance" && (
            <AddOrdonnanceModal
              isOpen={openModal.statut}
              handleClose={handleCloseModal}
              handleAddOrdonnance={handleAddOrdonnance}
            />
          )}
        </Sheet>
      </Modal>
    </>
  );
};
