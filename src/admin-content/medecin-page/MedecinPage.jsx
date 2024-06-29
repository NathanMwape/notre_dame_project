import React, { useEffect, useState } from 'react'
import { UserCardList } from '../../components/user-card-list/UserCardList'
import { getAllMedecin } from '../../data-fetching/dataReading';
import { withListHoc } from '../../components/HOCs/withListHoc';
import { Stack, Typography } from '@mui/joy';

export const MedecinPage = () => {
  const [listToDisplay, setListToDisplay] = useState({component: null});

  const loadComponentList = () => {
    const ListToDisplay = withListHoc(UserCardList, async () => {
      const result = await getAllMedecin();
      return result;
    });
    setListToDisplay({component: <ListToDisplay role="Medecin" />});
  }

  useEffect(() => {
    loadComponentList();
  }, []);

  return (
    <Stack spacing={2}>
         <Typography fontSize={{
                xs: 18,
                md: 20
            }} fontWeight={'bold'}>Medecins</Typography>
        {
          listToDisplay?.component
        }
    </Stack>
  )
}
