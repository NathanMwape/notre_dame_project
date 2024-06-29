import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Input,
  Option,
  Select,
  Sheet,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaCreditCard,
  FaDollarSign,
  FaUser,
} from "react-icons/fa";

const paymentMethods = ["Espèces", "Chèque", "Virement Bancaire"];

export const ManagePayments = () => {
  return (
    <Sheet
      sx={{
        bgcolor: "#f0f4f8",
        p: 3,
        borderRadius: "md",
        boxShadow: "lg",
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 3,
          color: "#2c3e50",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
      >
        Gérer les Paiements
      </Typography>
      <Card
        sx={{
          p: 3,
          mb: 3,
          boxShadow: "lg",
          borderRadius: "md",
          bgcolor: "#bdc0f0",
        }}
      >
        <CardContent>
          <Typography level="h5" sx={{ mb: 2, color: "#2c3e50" }}>
            Entrer un nouveau paiement
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              <Input
                placeholder="Nom du Patient"
                fullWidth
                startDecorator={<FaUser />}
                sx={{ background: "white" }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                placeholder="Montant"
                fullWidth
                startDecorator={<FaDollarSign />}
                sx={{ background: "white" }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Select
                placeholder="Méthode de Paiement"
                fullWidth
                startDecorator={<FaCreditCard />}
                sx={{ background: "white" }}
              >
                {paymentMethods.map((method, index) => (
                  <Option key={index} value={method}>
                    {method}
                  </Option>
                ))}
              </Select>
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                placeholder="Date"
                fullWidth
                type="date"
                startDecorator={<FaCalendarAlt />}
                sx={{ background: "white" }}
              />
            </Grid>
            <Grid xs={12}>
              <Input
                placeholder="Notes"
                fullWidth
                multiline
                minRows={3}
                sx={{ background: "white" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="solid"
              fullWidth
              sx={{
                backgroundColor: "#3498db",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Soumettre le Paiement
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Typography
        level="h4"
        sx={{ mb: 2, color: "#2c3e50", fontWeight: "bold" }}
      >
        Historique des Paiements Récents
      </Typography>
      <Card
        sx={{ p: 3, boxShadow: "lg", borderRadius: "md", bgcolor: "#ecf0f1" }}
      >
        <CardContent>
          <Grid container spacing={2}>
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid xs={12} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box>
                    <Typography
                      level="body1"
                      sx={{ color: "#2c3e50", fontWeight: "bold" }}
                    >
                      Patient: John Doe
                    </Typography>
                    <Typography level="body2" sx={{ color: "#7f8c8d" }}>
                      Montant: $100 | Méthode: Espèces | Date: 2024-05-20
                    </Typography>
                  </Box>
                  <Button size="sm" color="primary">
                    Voir Détails
                  </Button>
                </Box>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Sheet>
  );
};

export default ManagePayments;
