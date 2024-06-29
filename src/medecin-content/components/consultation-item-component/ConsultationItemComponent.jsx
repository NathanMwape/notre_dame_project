import React from "react";
import {
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
  Button,
} from "@mui/joy";
import { FaShare, FaTrash, FaEdit } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

export const ConsultationItemComponent = ({
  displayId,
  consultation,
  nom,
  prenom,
  date,
  sexe,
  setOpenModal,
  handleDeleteConsultation,
}) => {
  return (
    <tr>
      <td>{displayId}</td>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{date}</td>
      <td>{sexe}</td>
      <td>
        <Dropdown>
          <MenuButton size="sm" variant="">
            <FaEllipsisVertical />
          </MenuButton>
          <Menu>
            <MenuItem>
              <Typography startDecorator={<FaShare />}>
                Voir la consultation
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => handleDeleteConsultation(consultation.id)}
              color="danger"
            >
              <Typography startDecorator={<FaTrash />}>Supprimer</Typography>
            </MenuItem>
          </Menu>
        </Dropdown>
      </td>
    </tr>
  );
};
