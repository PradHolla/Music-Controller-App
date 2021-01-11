import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateAfterIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const pages = {
    JOIN: 'pages.join',
    CREATE: "pages.create",
}

export default function Info(props) {
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo() {
        return "Join Room adds the user to an already created room by a certain host. The user will be a guest in the room, Playback Controls and the votes required to skip will be defined by the user.";
    }

    function createInfo() {
        return "Create Room asks the user to create a room with an option to control what the guests can do. The user will essentially be the host controlling the whole playback.";
    }

    return ( <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
                Music Jam is a cross platform music controller application which can be hosted in a local network and have as many users possible.
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography variant="body1">
                { page === pages.JOIN ? joinInfo() : createInfo()}
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <IconButton onClick={() => {
                page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
                }}
                >
                    {page === pages.CREATE ? (
                        <NavigateBeforeIcon />
                    ) : (
                        <NavigateNextIcon />
                    )}
            </IconButton>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                Back
            </Button>
        </Grid>
    </Grid>
    );
}