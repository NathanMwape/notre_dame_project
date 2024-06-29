import { Box, Button, Card, Chip, Stack, Typography } from "@mui/joy";
import React from "react";
import { FaBed, FaChevronRight } from "react-icons/fa";

export const CardChambreComponent = ({ state }) => {
  return (
    <Box>
      <Card
        sx={{
          bgcolor: "Background",
        }}
      >
        <Stack spacing={1}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <FaBed size={35} />
            <Chip color={state}>Occupé</Chip>
          </Stack>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>
              <Typography fontWeight={"bold"}>Chambre 23</Typography>
              <Typography level="body-xs">
                <Typography fontWeight={"bold"}>Block</Typography>: Block
                opératoire
              </Typography>
            </Stack>
            <Stack>
              <FaChevronRight />
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
};
