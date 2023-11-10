import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";


const AddToWatchLaterIcon = () => {
    return (
        <IconButton aria-label="add to watch later">
            <PlaylistAddIcon fontSize="large" color="primary" />
        </IconButton>
    );
};

export default AddToWatchLaterIcon;