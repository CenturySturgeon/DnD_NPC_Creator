import Menu from '@mui/material/Menu';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActionsMenu(props) {

  function setCardStatusToEdit() {
    props.closeVertIconMenu();
    props.setEditingCard(true);
  }

  function handleDeleteCharClick(){
    // Send the DELETE request
    console.log("Character with id: ", props.id, " sent for deletion.");
    props.closeVertIconMenu();
  }

  return (
    <Menu
      disableScrollLock={ true }
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={props.closeVertIconMenu}
    >
      <MenuItem onClick={setCardStatusToEdit}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Edit</ListItemText>
      </MenuItem>

      <MenuItem onClick={handleDeleteCharClick}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
      </MenuItem>

    </Menu>
  );
}
