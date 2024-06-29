import { Grid } from '@mui/joy'
import React from 'react'
import { CardMedecinComponent } from './card-medecin-component/CardMedecinComponent'

export const MedecinCardList = () => {
  return (
    <>
        <Grid container spacing={2}>
        {
            [1,2,3,4,5].map(item => (
                    <Grid item xs={6} sm={4} md={3}>
                        {/* <CardPatientComponent /> */}
                        {/* <CardDossierComponent item={item} /> */}
                        <CardMedecinComponent />
                    </Grid>
            ))
        }
        </Grid>
    </>
  )
}
