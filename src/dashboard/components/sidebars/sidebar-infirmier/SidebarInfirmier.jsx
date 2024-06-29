import {
    Avatar,
    Box,
    Button,
    Card,
    Divider,
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
    Sheet,
    Stack,
    Typography,
} from "@mui/joy";
import { closeSidebar } from "../../utils";
import { FaBed, FaClipboardList, FaPrescriptionBottle, FaSearch } from "react-icons/fa";
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

  
  export const SidebarInfirmier = () => {
    const navigate = useNavigate();
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
        <Box sx={{ display: "flex", gap: 1, alignItems: "center", justifyContent: 'center' }}>
          <IconButton variant="soft" color="primary" size="sm">
            <MdSpaceDashboard size={24} />
          </IconButton>
          <Typography level="title-lg" textColor={'common.white'}>Hopital</Typography>
          {/* <ColorSchemeToggle sx={{ ml: 'auto' }} /> */}
        </Box>

        
        <Divider />
        <List
          sx={{
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <NavLink to={'/'} style={{ textDecoration: 'none'}}>
            <ListItem>
                <ListItemButton color='primary'>
                  <ListItemDecorator><FaTachometerAlt /></ListItemDecorator>
                  <ListItemContent>Accueil</ListItemContent>
                </ListItemButton>
            </ListItem>
          </NavLink>
        </List>
        
        <Button variant='outlined'>
            Action
        </Button>
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
      </Sheet>
    );
  };
  