import { Grid } from "@mui/joy";
import React from "react";
import { CardChambreComponent } from "../components/card-chambre-component/CardChambreComponent";

export const CardChambreListComponent = () => {
  return (
    <>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Grid item xs={12} sm={6} md={4}>
            <CardChambreComponent state={item > 3 ? "success" : "danger"} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
