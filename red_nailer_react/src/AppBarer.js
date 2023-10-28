import React from "react";
import {AppBar, Toolbar, Typography} from "@mui/material";

function AppBarer() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Amperion:er
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarer;
