import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Input,
  Sheet,
  Textarea,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import notreDameImage from "./NOTRE_DE_LOURDE.png";
import medicalCircle from "./plus_medical.png";

const numberToWords = (num) => {
  const ones = [
    "",
    "un",
    "deux",
    "trois",
    "quatre",
    "cinq",
    "six",
    "sept",
    "huit",
    "neuf",
  ];
  const teens = [
    "dix",
    "onze",
    "douze",
    "treize",
    "quatorze",
    "quinze",
    "seize",
    "dix-sept",
    "dix-huit",
    "dix-neuf",
  ];
  const tens = [
    "",
    "dix",
    "vingt",
    "trente",
    "quarante",
    "cinquante",
    "soixante",
    "soixante-dix",
    "quatre-vingt",
    "quatre-vingt-dix",
  ];

  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100)
    return (
      tens[Math.floor(num / 10)] + (num % 10 === 0 ? "" : "-" + ones[num % 10])
    );

  if (num < 1000) {
    return (
      ones[Math.floor(num / 100)] +
      " cent" +
      (num % 100 === 0 ? "" : " " + numberToWords(num % 100))
    );
  }

  if (num < 1000000) {
    return (
      numberToWords(Math.floor(num / 1000)) +
      " mille" +
      (num % 1000 === 0 ? "" : " " + numberToWords(num % 1000))
    );
  }

  return num;
};

const GenerateInvoice = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    patientName: "",
    date: "",
    totalAmountFC: "",
    totalAmountCurrency: "",
    amountInWords: "",
    description: "",
    paymentReason: "",
  });

  const [generatedInvoice, setGeneratedInvoice] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceDetails((prevState) => {
      const updatedDetails = { ...prevState, [name]: value };
      if (name === "totalAmountFC") {
        const amountFC = parseInt(value) || 0;
        updatedDetails.amountInWords =
          numberToWords(amountFC) + " franc congolais";
        updatedDetails.totalAmountCurrency = (amountFC / 2700).toFixed(2);
      }
      return updatedDetails;
    });
  };

  const handleGenerateInvoice = () => {
    setGeneratedInvoice({ ...invoiceDetails });
  };

  const handlePrint = () => {
    const printContents = document.getElementById("invoice-print").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <Sheet
      sx={{ bgcolor: "#f4f6f8", p: 4, borderRadius: "md", boxShadow: "lg" }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 4,
          color: "#37474f",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Générer des Factures
      </Typography>

      <Card
        variant="outlined"
        sx={{ boxShadow: "lg", p: 3, mb: 4, bgcolor: "#bdc0f0" }}
      >
        <CardContent>
          <Typography
            level="h4"
            sx={{
              mb: 2,
              color: "#37474f",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            Détails de la Facture
          </Typography>

          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <Input
                placeholder="Nom du Patient"
                name="patientName"
                value={invoiceDetails.patientName}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2, backgroundColor: "white" }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                type="date"
                name="date"
                value={invoiceDetails.date}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2, backgroundColor: "white" }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                placeholder="Montant Total en FC"
                name="totalAmountFC"
                value={invoiceDetails.totalAmountFC}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2, backgroundColor: "white" }}
              />
            </Grid>
            <Grid xs={12}>
              <Textarea
                placeholder="En règlement de"
                name="paymentReason"
                value={invoiceDetails.paymentReason}
                onChange={handleChange}
                minRows={4}
                fullWidth
                sx={{ mb: 2, backgroundColor: "white" }}
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleGenerateInvoice}
            variant="solid"
            color="primary"
            sx={{
              p: 1,
              backgroundColor: "#1976d2",
              color: "white",
              borderRadius: "8px",
              mt: 2,
            }}
          >
            Générer la Facture
          </Button>
        </CardContent>
      </Card>

      {generatedInvoice && (
        <Card
          variant="outlined"
          sx={{ boxShadow: "lg", p: 3, mt: 4, bgcolor: "#bdc0f0" }}
        >
          <CardContent>
            <Typography
              level="h4"
              sx={{
                mb: 2,
                color: "#37474f",
                fontWeight: "bold",
                fontFamily: "sans-serif",
              }}
            >
              Aperçu de la Facture
            </Typography>
            <Box
              id="invoice-print"
              sx={{ p: 4, border: "1px solid #ddd", borderRadius: "8px" }}
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
                    style={{ width: "110px", height: "auto" }}
                  />
                </Box>
                <Box sx={{ textAlign: "center", color: "#17a2b8" }}>
                  <Typography level="h5" sx={{ fontWeight: "bold" }}>
                    REPUBLIQUE DEMOCRATIQUE DU CONGO <br />
                    PROVINCE : HAUT KATANGA <br />
                    ZONE DE SANTE : SAKANIA <br />
                    CENTRE MEDICAL : NOTRE DAME DE LOURDES AV. DON <br />
                    BOSCO N°08 NEW KOYO/KASUMBALESA <br />
                    <Typography sx={{ textDecoration: "underline" }}>
                      DIOCESE DE SAKANIA KIPUSHI
                    </Typography>
                  </Typography>
                </Box>
                <Box>
                  <img
                    src={medicalCircle}
                    alt="Logo"
                    style={{ width: "110px", height: "auto" }}
                  />
                </Box>
              </Box>
              <Box sx={{ textAlign: "right", mb: 2 }}>
                <Typography>Date: {generatedInvoice.date}</Typography>
              </Box>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography
                  level="h5"
                  sx={{
                    mb: 2,
                    color: "#37474f",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  BON DE SORTIE CAISSE No …….. <br />
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography level="h6">
                  Montant en Chiffre FC: {generatedInvoice.totalAmountFC} FC{" "}
                  <br />
                  Montant en Chiffre DEVISE:{" "}
                  {generatedInvoice.totalAmountCurrency} $ <br />
                  Nom du bénéficiaire: {generatedInvoice.patientName} <br />
                  Somme de (en toutes lettres): {
                    generatedInvoice.amountInWords
                  }{" "}
                  <br />
                  En règlement de: {generatedInvoice.paymentReason}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 4,
                }}
              >
                <Typography level="h6">Nom & Signature du Caissier</Typography>
                <Typography level="h6">
                  Nom & Signature du Bénéficiaire
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={handlePrint}
              variant="solid"
              color="primary"
              sx={{
                backgroundColor: "#1976d2",
                color: "white",
                borderRadius: "8px",
                mt: 2,
              }}
            >
              Imprimer la Facture
            </Button>
          </CardContent>
        </Card>
      )}
    </Sheet>
  );
};

export default GenerateInvoice;
