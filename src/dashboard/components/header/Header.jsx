import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  GlobalStyles,
  IconButton,
  Sheet,
  Stack,
  Typography,
  Input,
  Badge,
  Menu,
  MenuItem,
  Button,
} from "@mui/joy";
import { IoMenu, IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { toggleSidebar } from "../utils";
import { supabase } from "../../../supabaise-config/supabaiseClient"; // Assurez-vous que l'import est correct
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications] = useState([
    "Notification 1",
    "Notification 2",
    "Notification 3",
    "Notification 4",
  ]);
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: "Chargement...", role: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      if (user) {
        const role = user.user_metadata.role;
        const email = user.email;

        let userDetails;
        switch (role) {
          case "medecin":
            userDetails = await supabase
              .from("Medecin")
              .select("nom, prenom")
              .eq("email", email)
              .single();
            setUserInfo({
              name: `${userDetails.data.prenom} ${userDetails.data.nom}`,
              role: "Médecin",
            });
            break;
          case "pharmacien":
            userDetails = await supabase
              .from("Pharmacien")
              .select("nom, prenom")
              .eq("email", email)
              .single();
            setUserInfo({
              name: `${userDetails.data.prenom} ${userDetails.data.nom}`,
              role: "Pharmacien",
            });
            break;
          case "infirmier":
            userDetails = await supabase
              .from("Infirmier")
              .select("nom, prenom")
              .eq("email", email)
              .single();
            setUserInfo({
              name: `${userDetails.data.prenom} ${userDetails.data.nom}`,
              role: "Infirmier",
            });
            break;
          case "caissier":
            userDetails = await supabase
              .from("Caissier")
              .select("nom, prenom")
              .eq("email", email)
              .single();
            setUserInfo({
              name: `${userDetails.data.prenom} ${userDetails.data.nom}`,
              role: "Caissier",
            });
            break;
          case "receptionniste":
            userDetails = await supabase
              .from("Receptionniste")
              .select("nom, prenom")
              .eq("email", email)
              .single();
            setUserInfo({
              name: `${userDetails.data.prenom} ${userDetails.data.nom}`,
              role: "Réceptionniste",
            });
            break;
          default:
            setUserInfo({ name: user.email, role: "Admin" });
        }
      }
    };
    fetchUser();
  }, []);

  const handleNotificationsClick = (event) => {
    if (anchorEl) {
      handleClose();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/"); // Redirige vers la page de connexion
    } else {
      console.error("Error logging out:", error);
    }
  };

  return (
    <Sheet
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        width: "100vw",
        height: "var(--Header-height)",
        zIndex: 9995,
        p: 1,
        py: 3,
        gap: 1,
        borderBottom: "1px solid",
        borderColor: "background.level1",
        boxShadow: "sm",
        backgroundColor: "white",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Header-height": "48px",
            [theme.breakpoints.up("md")]: {
              "--Header-height": "48px",
            },
          },
        })}
      />
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          onClick={() => toggleSidebar()}
          variant="outlined"
          color="success"
          size="sm"
        >
          <IoMenu />
        </IconButton>
        <Typography level="h6" fontWeight="bold">
          Hôpital NDL
        </Typography>
      </Stack>
      <Box sx={{ flexGrow: 1, mx: 15 }}>
        <Input
          placeholder="Rechercher..."
          startDecorator={<IoSearch />}
          sx={{
            width: "70%",
            backgroundColor: "#f0f0f0",
            color: "#333",
            borderColor: "#ccc",
            "&:hover": {
              borderColor: "#aaa",
            },
            "&:focus-within": {
              borderColor: "#888",
            },
          }}
        />
      </Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <IconButton
          variant="outlined"
          color="neutral"
          size="sm"
          onClick={handleNotificationsClick}
        >
          <Badge badgeContent={notifications.length} color="danger">
            <IoNotificationsOutline />
          </Badge>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleClose}>
              <Typography
                sx={{
                  maxWidth: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {notification}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar />
          <Stack>
            <Typography level="body-sm" fontWeight="bold">
              {userInfo.name}
            </Typography>
            <Typography level="body-xs">
              {userInfo.role.toUpperCase()}
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          color="danger"
          size="sm"
          onClick={handleLogout}
        >
          Déconnexion
        </Button>
      </Stack>
    </Sheet>
  );
};
