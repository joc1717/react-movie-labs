import React, { useContext } from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from '../../contexts/moviesContext';


const AddToWatchLaterIcon = ({ movie }) => {
    const context = useContext(MoviesContext)

    const handleAddToWatchList = (e) =>  {
        e.preventDefault();
        context.addToWatchList(movie)
    }

    return (
        <IconButton aria-label="add to watch later" onClick={handleAddToWatchList}>
            <PlaylistAddIcon fontSize="large" color="primary" />
        </IconButton>
    );
};

export default AddToWatchLaterIcon;