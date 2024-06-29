import { Grid } from '@mui/joy'
import React from 'react'
import { CardDossierComponent } from '../components/card-dossier-component/CardDossierComponent'

export const DossiersListComponent = () => {
  return (
    <>
        <Grid container spacing={2}>
        {
            [1,2,3,4,5].map(item => (
                    <Grid item xs={6} sm={4} md={3}>
                        <CardDossierComponent item={item} />
                    </Grid>
            ))
        }
        </Grid>
    </>
  )
}
