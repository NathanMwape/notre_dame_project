import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Sheet,
  Typography,
} from "@mui/joy";
import React from "react";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const CashierDashboard = () => {
  return (
    <Sheet
      sx={{ bgcolor: "#f4f6f8", p: 4, borderRadius: "md", boxShadow: "lg" }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Bienvenue à la Caisse
      </Typography>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Actions Rapides
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={4}>
          <NavLink to={"/manage-payments"} style={{ textDecoration: "none" }}>
            <Button
              startDecorator={<FaMoneyCheckAlt />}
              variant="solid"
              color="primary"
              fullWidth
              sx={{
                p: 2,
                backgroundColor: "#1976d2",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Enregistrer un Paiement
            </Button>
          </NavLink>
        </Grid>
        <Grid xs={12} md={4}>
          <NavLink to={"/view-transactions"} style={{ textDecoration: "none" }}>
            <Button
              startDecorator={<FaClipboardList />}
              variant="solid"
              color="primary"
              fullWidth
              sx={{
                p: 2,
                backgroundColor: "#388e3c",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Voir les Transactions
            </Button>
          </NavLink>
        </Grid>
        <Grid xs={12} md={4}>
          <NavLink to={"/generate-invoices"} style={{ textDecoration: "none" }}>
            <Button
              startDecorator={<FaFileInvoiceDollar />}
              variant="solid"
              color="primary"
              fullWidth
              sx={{
                p: 2,
                backgroundColor: "#d32f2f",
                color: "white",
                borderRadius: "8px",
              }}
            >
              Générer des Factures
            </Button>
          </NavLink>
        </Grid>
      </Grid>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Informations Financières
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#1976d2" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#1976d2" }}>
                Total des Paiements Aujourd'hui
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#1976d2" }}
              >
                $2,300
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#388e3c" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#388e3c" }}>
                Total des Transactions ce Mois
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#388e3c" }}
              >
                150
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e3f2fd", borderColor: "#d32f2f" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#d32f2f" }}>
                Paiements en Attente
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#d32f2f" }}
              >
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Statistiques
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#fff3e0", borderColor: "#ff9800" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#ff9800" }}>
                Moyenne des Paiements Quotidiens
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#ff9800" }}
              >
                $1,800
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{ boxShadow: "lg", bgcolor: "#e8f5e9", borderColor: "#4caf50" }}
          >
            <CardContent>
              <Typography level="h5" sx={{ mb: 1, color: "#4caf50" }}>
                Taux de Recouvrement
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#4caf50" }}
              >
                95%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography
        level="h4"
        sx={{
          mb: 4,
          color: "#1976d2",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        Notifications Récentes
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "lg",
            bgcolor: "white",
            mb: 2,
            borderColor: "#1976d2",
          }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#1976d2" }}>
              Nouveau paiement enregistré pour Jane Doe.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 09:30
            </Typography>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          sx={{
            boxShadow: "lg",
            bgcolor: "white",
            mb: 2,
            borderColor: "#d32f2f",
          }}
        >
          <CardContent>
            <Typography level="body1" sx={{ mb: 1, color: "#d32f2f" }}>
              Le paiement de John Smith Kazadi est en attente de confirmation.
            </Typography>
            <Typography level="body2" color="textSecondary">
              2024-05-20 08:45
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Sheet>
  );
};
