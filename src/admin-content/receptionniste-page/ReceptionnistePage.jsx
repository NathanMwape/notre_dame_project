import React, { useEffect, useState } from "react";
import { UserCardList } from "../../components/user-card-list/UserCardList";
import {
  getAllMedecin,
  getAllReceptionniste,
} from "../../data-fetching/dataReading";
import { withListHoc } from "../../components/HOCs/withListHoc";
import { Stack, Typography } from "@mui/joy";

export const ReceptionnistePage = () => {
  const [listToDisplay, setListToDisplay] = useState({ component: null });

  const loadComponentList = () => {
    const ListToDisplay = withListHoc(UserCardList, async () => {
      const result = await getAllReceptionniste();
      return result;
    });
    setListToDisplay({ component: <ListToDisplay role={"receptionniste"} /> });
  };

  useEffect(() => {
    loadComponentList();
  }, []);

  return (
    <Stack spacing={2}>
      <Typography
        fontSize={{
          xs: 18,
          md: 20,
        }}
        fontWeight={"bold"}
      >
        Receptionniste
      </Typography>
      {listToDisplay?.component}
    </Stack>
  );
};
