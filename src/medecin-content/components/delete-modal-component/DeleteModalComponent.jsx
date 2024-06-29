import React from "react";
import { Button, Typography } from "@mui/joy";

export const DeleteModalComponent = ({
  setOpenModal,
  handleDelete,
  ordonnanceId,
  title,
  message,
}) => {
  const handleConfirmDelete = () => {
    handleDelete(ordonnanceId);
  };

  return (
    <div>
      <Typography level="h5" fontWeight="bold" textAlign="center" mb={2}>
        {title}
      </Typography>
      <Typography textAlign="center" mb={2}>
        {message}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Button onClick={handleConfirmDelete} color="danger">
          Supprimer
        </Button>
        <Button
          onClick={() =>
            setOpenModal({ statut: false, type: null, data: null })
          }
        >
          Annuler
        </Button>
      </div>
    </div>
  );
};
