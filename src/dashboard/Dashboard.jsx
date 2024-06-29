import {
  Box,
  CssBaseline,
  CssVarsProvider,
  Drawer,
  Stack,
  extendTheme,
} from "@mui/joy";
import React from "react";
import { Header } from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { SidebarMedecin } from "./components/sidebars/sidebar-medecin/SidebarMedecin";
import { SidebarPharmacien } from "./components/sidebars/sidebar-pharmacien/SidebarPharmacien";
import { SidebarInfirmier } from "./components/sidebars/sidebar-infirmier/SidebarInfirmier";
import { SidebarAdmin } from "./components/sidebars/sidebar-admin/SidebarAdmin";
import { SidebarCaisse } from "./components/sidebars/sidebar-caisse/SidebarCaisse";
import { SidebarReceptionniste } from "./components/sidebars/sidebar-receptionniste/SidebarReceptionniste";

const dashbardTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          surface: "rgb(0, 86, 221)",
          body: "rgb(233, 236, 239)",
        },
        primary: {
          plainColor: "white",
          plainActiveColor: "rgb(18, 70, 123)",
          plainHoverColor: "rgb(18, 70, 123)",

          // solidColor: 'white',
          solidBg: "rgb(0, 86, 221)",

          outlinedColor: "white",
          outlinedHoverColor: "rgb(18, 70, 123)",
        },
      },
    },
  },
});

export const Dashboard = ({ userType }) => {
  const [openRightDrawer, setOpenRightDrawer] = React.useState({
    statut: false,
    id: null,
  });

  return (
    <CssVarsProvider theme={dashbardTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100dvh" }}>
        <Header />
        {userType === "medecin" && <SidebarMedecin />}
        {userType === "pharmacien" && <SidebarPharmacien />}
        {userType === "infirmier" && <SidebarInfirmier />}
        {userType === "admin" && <SidebarAdmin />}
        {userType === "caissier" && <SidebarCaisse />}
        {userType === "receptionniste" && <SidebarReceptionniste />}
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 8,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
            overflow: "auto",
          }}
        >
          <Outlet context={[openRightDrawer, setOpenRightDrawer]} />
        </Box>
      </Box>
      <Drawer
        sx={{
          zIndex: 10000,
        }}
        anchor={"right"}
        open={openRightDrawer.statut}
        onClose={() => setOpenRightDrawer({ statut: false, id: null })}
      >
        {openRightDrawer.statut && (
          <DetailProfil openModalDrawer={openRightDrawer} />
        )}
      </Drawer>
    </CssVarsProvider>
  );
};
