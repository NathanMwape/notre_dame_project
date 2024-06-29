import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Dropdown,
  GlobalStyles,
  IconButton,
  Input,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  listItemButtonClasses,
  ListItemContent,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { closeSidebar } from "../../utils";
import {
  FaBed,
  FaCalendarAlt,
  FaClipboardList,
  FaFolder,
  FaPrescriptionBottle,
  FaSearch,
  FaTasks,
} from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserAltSlash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { BsPersonFillExclamation } from "react-icons/bs";
import { useState } from "react";
import ModalPatient from "../sidebar-receptionniste/ModalPatient";

export const SidebarMedecin = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
        //   bgcolor: 'Background'
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton variant="soft" color="primary" size="sm">
          <MdSpaceDashboard size={24} />
        </IconButton>
        <Typography level="title-lg" textColor={"common.white"}>
          Hopital
        </Typography>
        {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
      </Box>

      <Divider />
      <List
        sx={{
          "--ListItem-radius": (theme) => theme.vars.radius.sm,
        }}
      >
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaTachometerAlt />
              </ListItemDecorator>
              <ListItemContent>Accueil</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/dossiers"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaFolder />
              </ListItemDecorator>
              <ListItemContent>Dossiers</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/patients"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <BsPersonFillExclamation />
              </ListItemDecorator>
              <ListItemContent>Patients</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/ordonnances"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaPrescriptionBottle />
              </ListItemDecorator>
              <ListItemContent>Ordonnances</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/consultations"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaClipboardList />
              </ListItemDecorator>
              <ListItemContent>Consultations</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/chambres"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaBed />
              </ListItemDecorator>
              <ListItemContent>Chambres</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/planning"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaCalendarAlt />
              </ListItemDecorator>
              <ListItemContent>Voir le planing</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
        <NavLink to={"/taches"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaTasks />
              </ListItemDecorator>
              <ListItemContent>Mes Taches</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>

      <Dropdown>
        <MenuButton color="primary">Action</MenuButton>
        <Menu sx={{ zIndex: 10000 }}>
          <MenuItem onClick={handleOpenModal}>Ajouter patient</MenuItem>
          <MenuItem>Nouvelle consultation</MenuItem>
        </Menu>
      </Dropdown>
      {/* <Button variant='outlined'>
            Action
        </Button> */}
      {/* <Divider /> */}
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        {/* <Avatar
            variant="solid"
            size="sm"
            alt="Admin"
          />
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography level="title-sm">John Doe</Typography>
            <Typography level="body-xs">johndoe@legent.com</Typography>
          </Box>
          <IconButton onClick={() => {
            supabase.auth.signOut();
            navigate('/');
          }} size="sm" variant="plain" color="neutral">
            <IoIosLogOut />
          </IconButton> */}
      </Box>
      <ModalPatient open={openModal} onClose={handleCloseModal} />
    </Sheet>
  );
};
