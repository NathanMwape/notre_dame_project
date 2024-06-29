import React, { useState } from "react";
import { Modal, Sheet, Typography, Input, Button, ModalClose } from "@mui/joy";

const EditOrdonnanceModal = ({
  isOpen,
  handleClose,
  ordonnance,
  handleUpdateOrdonnance,
}) => {
  const [formValues, setFormValues] = useState(ordonnance);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleUpdateOrdonnance(formValues);
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: { xs: "85%", md: "40%" },
          maxWidth: { xs: "85%", md: "40%" },
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          bgcolor: "Background",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography id="modal-title" level="h4" fontWeight="bold">
          Modifier Ordonnance
        </Typography>
        <div>
          <Input
            name="nom"
            value={formValues.nom}
            onChange={handleChange}
            placeholder="Nom"
            sx={{ my: 2, backgroundColor: "white" }}
          />
          <Input
            name="prenom"
            value={formValues.prenom}
            onChange={handleChange}
            placeholder="Prénom"
            sx={{ my: 2, backgroundColor: "white" }}
          />
          <Input
            name="date_prescription"
            value={formValues.date_prescription}
            onChange={handleChange}
            type="date"
            placeholder="Date"
            sx={{ my: 2, backgroundColor: "white" }}
          />
          <Input
            name="medicament"
            value={formValues.medicament}
            onChange={handleChange}
            placeholder="Médicament"
            sx={{ my: 2, backgroundColor: "white" }}
          />
          <Input
            name="posologie"
            value={formValues.posologie}
            onChange={handleChange}
            placeholder="Posologie"
            sx={{ my: 2, backgroundColor: "white" }}
          />
          <Button>Enregistrer</Button>
        </div>
      </Sheet>
    </Modal>
  );
};

export default EditOrdonnanceModal;
