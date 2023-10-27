import React from "react";
import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField} from "@mui/material";

function LippenstifterComponenter() {
    const [selectedHersteller, setSelectedHersteller] = React.useState("Alverde");
    const [selectedFarbe, setSelectedFarbe] = React.useState("Rot");

    const handleFarbeChange = (e) => {
        setSelectedFarbe(e.target.value);
    }

    const handleHerstellerChange = (e) => {
        setSelectedHersteller(e.target.value);
    }

    return (
        <Grid container spacing={2} style={{ padding: "20px" }}>
            <Grid item xs={12} sm={6}>
                <TextField required label="Produkt-Nummer" fullWidth variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Beschreibung" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Hersteller"
                    fullWidth
                    variant="outlined"
                    value={selectedHersteller}
                    onChange={handleHerstellerChange}
                    multiple
                >
                    <MenuItem value={"Alverde"}>Alverde</MenuItem>
                    <MenuItem value={"Nyx"}>Nyx</MenuItem>
                    <MenuItem value={"Catrice"}>Catrice</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required label="Preis" fullWidth variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    label="Farbe"
                    select
                    value={selectedFarbe}
                    onChange={handleFarbeChange}
                    fullWidth
                    variant="outlined"
                >
                    <MenuItem value={"Rot"}>Rot</MenuItem>
                    <MenuItem value={"Nude"}>Nude</MenuItem>
                    <MenuItem value={"Transparent"}>Transparent</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="vegan"
                />
            </Grid>
        </Grid>
    );
}

export default LippenstifterComponenter;