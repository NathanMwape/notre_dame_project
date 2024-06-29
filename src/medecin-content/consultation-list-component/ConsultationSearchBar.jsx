import { TextField } from "@mui/joy";
import React, { useState } from "react";

export const ConsultationSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // État pour stocker le terme de recherche

  // Fonction de mise à jour du terme de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      label="Rechercher une consultation"
      variant="outlined"
      onChange={handleSearchChange}
      value={searchTerm}
      style={{ marginLeft: 20 }}
    />
  );
};
