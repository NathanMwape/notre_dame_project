import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Input,
  Sheet,
  Typography,
} from "@mui/joy";
import { FaSearch } from "react-icons/fa";

const transactions = [
  {
    id: 1,
    date: "2024-05-20",
    description: "Paiement de consultation",
    amount: "$50",
    status: "Complété",
  },
  {
    id: 2,
    date: "2024-05-19",
    description: "Paiement de pharmacie",
    amount: "$30",
    status: "En attente",
  },
  {
    id: 3,
    date: "2024-05-18",
    description: "Paiement de séjour",
    amount: "FC 100,000",
    status: "Complété",
  },
  // Ajoutez d'autres transactions ici
];

const statusColors = {
  Complété: "#4caf50",
  "En attente": "#ff9800",
  Annulé: "#f44336",
};

const ViewTransactions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.date.includes(searchQuery) ||
      transaction.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      transaction.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sheet
      sx={{ bgcolor: "#fafafa", p: 4, borderRadius: "md", boxShadow: "lg" }}
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
        Voir les Transactions
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
            Liste des Transactions
          </Typography>

          <Input
            placeholder="Rechercher par date, description, statut..."
            startDecorator={<FaSearch style={{ color: "white" }} />}
            onChange={handleSearch}
            sx={{
              mb: 4,
              borderColor: "#37474f",
              "&:hover": { borderColor: "#1976d2" },
              backgroundColor: "#37474f",
              color: "white",
              borderRadius: "8px",
              "& .MuiInputAdornment-root": {
                color: "white",
              },
            }}
          />

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Grid
              container
              sx={{
                fontWeight: "bold",
                mb: 1,
                bgcolor: "#e0e0e0",
                p: 1,
                borderRadius: "8px",
              }}
            >
              <Grid xs={2}>ID</Grid>
              <Grid xs={2}>Date</Grid>
              <Grid xs={4}>Description</Grid>
              <Grid xs={2}>Montant</Grid>
              <Grid xs={2}>Statut</Grid>
            </Grid>
            {filteredTransactions.map((transaction) => (
              <Grid
                container
                key={transaction.id}
                sx={{
                  p: 1,
                  bgcolor: "#f5f5f5",
                  borderRadius: "8px",
                  "&:hover": { bgcolor: "#eeeeee" },
                }}
              >
                <Grid xs={2}>{transaction.id}</Grid>
                <Grid xs={2}>{transaction.date}</Grid>
                <Grid xs={4}>{transaction.description}</Grid>
                <Grid xs={2}>{transaction.amount}</Grid>
                <Grid xs={2} sx={{ color: statusColors[transaction.status] }}>
                  {transaction.status}
                </Grid>
              </Grid>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Sheet>
  );
};

export default ViewTransactions;
