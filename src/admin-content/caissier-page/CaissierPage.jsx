import React, { useEffect, useState } from "react";
import { UserCardList } from "../../components/user-card-list/UserCardList";
import { getAllCaissier } from "../../data-fetching/dataReading";
import { withListHoc } from "../../components/HOCs/withListHoc";
import { Stack, Typography } from "@mui/joy";

export const CaissierPage = () => {
  const [listToDisplay, setListToDisplay] = useState({ component: null });

  const loadComponentList = () => {
    const ListToDisplay = withListHoc(UserCardList, async () => {
      const result = await getAllCaissier();
      return result;
    });
    setListToDisplay({ component: <ListToDisplay role={"caissier"} /> });
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
        Caissiers
      </Typography>
      {listToDisplay?.component}
    </Stack>
  );
};
