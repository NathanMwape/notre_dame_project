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
  Modal,
  ModalClose,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";
import { closeSidebar } from "../../utils";
import {
  FaBed,
  FaClipboardList,
  FaPrescriptionBottle,
  FaSearch,
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
import { FaUserDoctor } from "react-icons/fa6";
import { useState } from "react";
import { AddUserForm } from "../../../../admin-content/components/add-user-form/AddUserForm";

export const SidebarAdmin = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState({
    type: null,
    statut: false
  });

  const handleCloseModal = () => {
    setOpenModal({
      type: null,
      statut: false
    })
  }

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

        <NavLink to={"/medecins"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaUserDoctor />
              </ListItemDecorator>
              <ListItemContent>Medecins</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={"/pharmaciens"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaTachometerAlt />
              </ListItemDecorator>
              <ListItemContent>Pharmaciens</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={"/infirmiers"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaTachometerAlt />
              </ListItemDecorator>
              <ListItemContent>Infirmiers</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={"/caissiers"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaTachometerAlt />
              </ListItemDecorator>
              <ListItemContent>Caissiers</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to={"/receptionnistes"} style={{ textDecoration: "none" }}>
          <ListItem>
            <ListItemButton color="primary">
              <ListItemDecorator>
                <FaTachometerAlt />
              </ListItemDecorator>
              <ListItemContent>Receptionnistes</ListItemContent>
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>

      <Dropdown>
        <MenuButton color="primary">Action</MenuButton>
        <Menu sx={{ zIndex: 10000 }}>
          <MenuItem onClick={() => setOpenModal({type: 'add-user', statut: true})}>Ajouter utilisateur</MenuItem>
        </Menu>
      </Dropdown>
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
      {/* General Modal */}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={openModal.statut}
        onClose={() => handleCloseModal()}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000 }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: {
              xs: '85%',
              md: '50%'
            },
            minWidth: {
              xs: '80%',
              md: '40%'
            },
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            bgcolor: 'Background'
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          {
            openModal.type === "add-user" && (
              <AddUserForm handleCloseModal={handleCloseModal} />
            )
          }
        </Sheet>
      </Modal>
    </Sheet>
  );
};
