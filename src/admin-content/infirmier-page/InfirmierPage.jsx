import React, { useEffect, useState } from "react";
import { UserCardList } from "../../components/user-card-list/UserCardList";
import { getAllInfirmier } from "../../data-fetching/dataReading";
import { withListHoc } from "../../components/HOCs/withListHoc";
import { Stack, Typography } from "@mui/joy";

export const InfirmierPage = () => {
  const [listToDisplay, setListToDisplay] = useState({ component: null });

  const loadComponentList = () => {
    const ListToDisplay = withListHoc(UserCardList, async () => {
      const result = await getAllInfirmier();
      return result;
    });
    setListToDisplay({ component: <ListToDisplay role={"infirmier"} /> });
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
        Infirmiers
      </Typography>
      {listToDisplay?.component}
    </Stack>
  );
};
