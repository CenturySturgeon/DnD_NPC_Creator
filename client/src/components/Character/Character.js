import { useState } from 'react';
import { Paper, Typography, Box, Collapse, IconButton } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Character.css'
import man_image from '../../../public/images/profile_man.png'

export default function Character() {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                <img className="img" src={man_image}></img>
                <Box paddingX={1}>
                    <Typography variant="h6" component="h2">
                        Name of Character
                    </Typography>
                    <Typography variant="subtitle1">
                        "Hereby is thy quote, a brief phrase said by the character"
                    </Typography>
                    
                    <div style={{ display: 'flex' }}>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <div style={{ display: 'flex', justifyContent: 'right' }}>
                            <IconButton
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', justifySelf: 'end' }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </div>
                    </div>

                    <Collapse in={expanded}>
                        <Typography variant="body1">
                            Additional details about the character go here.
                        </Typography>
                    </Collapse>

                </Box>
            </Paper>
        </Grid>
    );
}