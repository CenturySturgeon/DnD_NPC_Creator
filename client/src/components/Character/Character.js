import { useState } from 'react';

import { Paper, Box, IconButton, Avatar, Tooltip } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import MoreVertIcon from '@mui/icons-material/MoreVert'; // Import MoreVertIcon

import './Character.css'
import ActionsMenu from './ActionsMenu';
import CharacterText from './CharacterText';

import { getCampaignChars } from './Utils';

export default function Character(props) {

    // Set a state for the anchor element of the menu
    const [anchorEl, setAnchorEl] = useState(null);
    // Set a variable to indicate wether the menu is open or not 
    const open = Boolean(anchorEl);

    // Menu event handlers
    const handleVertIconClick = (event) => {
        setAnchorEl(event.currentTarget);
        props.setBodyPadComp(isBodyPaddingActive => !isBodyPaddingActive);
    };
    const closeVertIconMenu = () => {
        setAnchorEl(null);
        props.setBodyPadComp(isBodyPaddingActive => !isBodyPaddingActive);
    };
    
    const campaignChars = getCampaignChars(props.campaign);

    return (
        <Grid item xs={3}>
            <Box position="relative">
                <Tooltip title={campaignChars != 'N/A' ? props.campaign : 'Not Assigned'} arrow>
                    <Avatar variant="rounded"
                        sx={{ position: 'absolute', top: 0, left: 0, bgcolor: props.theme.palette.primary.main }}>
                        {campaignChars}
                    </Avatar>
                </Tooltip>
                <IconButton aria-label="show more"
                    id="basic-button"
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleVertIconClick}>
                    <MoreVertIcon />
                </IconButton>

                <ActionsMenu anchorEl={anchorEl} closeVertIconMenu={closeVertIconMenu} open={open}></ActionsMenu>

                <Paper elevation={3}>
                    <img className="img" src={props.image} alt="Character Image" />
                    <CharacterText name={props.name} quote={props.quote}></CharacterText>
                </Paper>
            </Box>
        </Grid>
    );
}
