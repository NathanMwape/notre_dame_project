import { Grid } from '@mui/joy'
import React from 'react'
import { UserCardComponent } from './user-card-component/UserCardComponent'

export const UserCardList = ({data, loading, role}) => {
  return (
    <>
        <Grid container spacing={2}>
        {
            data.map(item => (
                    <Grid item xs={6} sm={4} md={3}>
                        {/* <CardPatientComponent /> */}
                        {/* <CardDossierComponent item={item} /> */}
                        <UserCardComponent nom={item.nom} prenom={item.prenom} role={role} />
                    </Grid>
            ))
        }
        </Grid>
    </>
  )
}
