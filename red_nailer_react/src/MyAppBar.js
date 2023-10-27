import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

function MyAppBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Generier:er
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;
