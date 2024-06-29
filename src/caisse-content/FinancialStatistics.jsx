import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/joy";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, expenses: 2400 },
  { name: "Feb", revenue: 3000, expenses: 1398 },
  { name: "Mar", revenue: 2000, expenses: 9800 },
  { name: "Apr", revenue: 2780, expenses: 3908 },
  { name: "May", revenue: 1890, expenses: 4800 },
  { name: "Jun", revenue: 2390, expenses: 3800 },
  { name: "Jul", revenue: 3490, expenses: 4300 },
];

const pieData = [
  { name: "Revenue", value: 4000 },
  { name: "Expenses", value: 3000 },
];

const COLORS = ["#0088FE", "#FFBB28"];

const FinancialStatistics = () => {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#f0f4f8",
        borderRadius: "md",
        boxShadow: "lg",
        minHeight: "100vh",
      }}
    >
      <Typography
        level="h2"
        sx={{
          mb: 4,
          color: "#1a237e",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Statistiques Financières
      </Typography>

      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#ffffff",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                level="h5"
                sx={{ mb: 2, color: "#1a237e", textAlign: "center" }}
              >
                Revenus et Dépenses Mensuels
              </Typography>
              <LineChart width={500} height={300} data={data}>
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#1976d2"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#d32f2f"
                  strokeWidth={2}
                />
                <CartesianGrid stroke="#e0e0e0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} md={6}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#ffffff",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                level="h5"
                sx={{ mb: 2, color: "#1a237e", textAlign: "center" }}
              >
                Répartition des Revenus et Dépenses
              </Typography>
              <PieChart width={400} height={300}>
                <Pie
                  data={pieData}
                  cx={200}
                  cy={150}
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#ffffff",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                level="h5"
                sx={{ mb: 1, color: "#1a237e", textAlign: "center" }}
              >
                Total des Revenus
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#1a237e", textAlign: "center" }}
              >
                $50,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#ffffff",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                level="h5"
                sx={{ mb: 1, color: "#d32f2f", textAlign: "center" }}
              >
                Total des Dépenses
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#d32f2f", textAlign: "center" }}
              >
                $30,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            variant="outlined"
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              bgcolor: "#ffffff",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                level="h5"
                sx={{ mb: 1, color: "#388e3c", textAlign: "center" }}
              >
                Bénéfice Net
              </Typography>
              <Typography
                level="h4"
                fontWeight="bold"
                sx={{ color: "#388e3c", textAlign: "center" }}
              >
                $20,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancialStatistics;
