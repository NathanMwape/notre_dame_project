import React, { useRef } from "react";
import { Box, Typography, Button, Modal, Sheet } from "@mui/joy";
import medicalCircle from "./plus_medical.png";
import notreDameImage from "./NOTRE_DE_LOURDE.png";
import { useReactToPrint } from "react-to-print";

const OrdonnanceModal = ({ isOpen, handleClose, ordonnance }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Ordonnance_${ordonnance.id}`,
  });

  if (!ordonnance) return null;

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Sheet
        variant="outlined"
        sx={{
          minWidth: { xs: "70%", md: "35%" }, // Reduced the width
          maxWidth: { xs: "70%", md: "35%" },
          borderRadius: "md",
          p: 2, // Reduced padding
          boxShadow: "lg",
          bgcolor: "Background",
        }}
      >
        <Box
          id="invoice-print"
          ref={componentRef}
          sx={{ p: 3, border: "1px solid #ddd", borderRadius: "8px" }} // Reduced padding
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <img
                src={notreDameImage}
                alt="Logo"
                style={{ width: "90px", height: "auto" }} // Reduced image size
              />
            </Box>
            <Box sx={{ textAlign: "center", color: "#17a2b8" }}>
              <Typography
                level="h6"
                sx={{ fontWeight: "bold", fontSize: "12px" }}
              >
                {" "}
                {/* Reduced font size */}
                REPUBLIQUE DEMOCRATIQUE DU CONGO <br />
                PROVINCE : HAUT KATANGA <br />
                ZONE DE SANTE : SAKANIA <br />
                CENTRE MEDICAL : NOTRE DAME DE LOURDES AV. DON <br />
                BOSCO N°08 NEW KOYO/KASUMBALESA <br />
                <Typography
                  sx={{ textDecoration: "underline", fontSize: "12px" }}
                >
                  DIOCESE DE SAKANIA KIPUSHI
                </Typography>
              </Typography>
            </Box>
            <Box>
              <img
                src={medicalCircle}
                alt="Logo"
                style={{ width: "90px", height: "auto" }} // Reduced image size
              />
            </Box>
          </Box>
          <Box sx={{ textAlign: "right", mb: 2 }}>
            <Typography sx={{ fontSize: "12px" }}>
              {" "}
              {/* Reduced font size */}
              Date: {ordonnance.date}
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              level="h6"
              sx={{
                mb: 2,
                color: "#37474f",
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "14px", // Reduced font size
              }}
            >
              ORDONNANCE No {ordonnance.id} <br />
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              {" "}
              {/* Reduced font size */}
              Nom du patient: {ordonnance.nom} {ordonnance.prenom} <br />
              Date de prescription: {ordonnance.date} <br />
              Médicament prescrit: {ordonnance.medicament} <br />
              Posologie: {ordonnance.posologie}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Typography sx={{ fontSize: "12px" }}>
              {" "}
              {/* Reduced font size */}
              Nom & Signature du Médecin
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>
              {" "}
              {/* Reduced font size */}
              Nom & Signature du Patient
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            onClick={handleClose}
            variant="solid"
            color="primary"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
              fontSize: "12px", // Reduced button font size
              p: "6px 12px", // Reduced button padding
            }}
          >
            Fermer
          </Button>
          <Button
            onClick={handlePrint}
            variant="solid"
            color="primary"
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
              fontSize: "12px", // Reduced button font size
              p: "6px 12px", // Reduced button padding
            }}
          >
            Imprimer ordonnance
          </Button>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default OrdonnanceModal;
