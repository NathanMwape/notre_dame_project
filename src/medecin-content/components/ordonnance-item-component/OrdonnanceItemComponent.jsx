import { Dropdown, Menu, MenuButton, MenuItem, Typography } from "@mui/joy";
import React from "react";
import { FaShare, FaTrash, FaEdit } from "react-icons/fa";
import { FaEllipsisVertical } from "react-icons/fa6";

export const OrdonnanceItemComponent = ({
  displayId,
  id,
  nom,
  prenom,
  date,
  medicament,
  posologie,
  setOpenModal,
  handleDeleteOrdonnance,
}) => {
  return (
    <tr>
      <td>{displayId}</td>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{date}</td>
      <td>{medicament}</td>
      <td>
        <Dropdown>
          <MenuButton size="sm" variant="">
            <FaEllipsisVertical />
          </MenuButton>
          <Menu>
            <MenuItem
              onClick={() =>
                setOpenModal({
                  statut: true,
                  type: "view-ordonnance",
                  data: { id, nom, prenom, date, medicament, posologie },
                })
              }
            >
              <Typography startDecorator={<FaShare />}>
                Voir l'ordonnance
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() =>
                setOpenModal({
                  statut: true,
                  type: "edit-ordonnance",
                  data: { id, nom, prenom, date, medicament, posologie },
                })
              }
            >
              <Typography startDecorator={<FaEdit />}>Modifier</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleDeleteOrdonnance(id)} color="danger">
              <Typography startDecorator={<FaTrash />}>Supprimer</Typography>
            </MenuItem>
          </Menu>
        </Dropdown>
      </td>
    </tr>
  );
};
