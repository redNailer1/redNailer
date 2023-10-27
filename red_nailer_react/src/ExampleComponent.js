import React from "react";
import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField} from "@mui/material";

function MyForm() {
    const [selectedFarbe, setSelectedFarbe] = React.useState("Rot");
    const [selectedHersteller, setSelectedHersteller] = React.useState([]);

    const handleFarbeChange = (e) => {
        setSelectedFarbe(e.target.value);
    }

    const handleHerstellerChange = (e) => {
        setSelectedHersteller(e.target.value);
    }

    return (
        <Grid container spacing={2} style={{ padding: "20px" }}>
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
                    <MenuItem value={"Gelb"}>Gelb</MenuItem>
                    <MenuItem value={"Blau"}>Blau</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Dauer der Maniküre" fullWidth variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Beschreibung" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    required
                    label="Hersteller"
                    fullWidth
                    variant="outlined"
                    value={selectedHersteller}
                    onChange={handleHerstellerChange}
                    multiple
                >
                    <MenuItem value={"Essie"}>Essie</MenuItem>
                    <MenuItem value={"OPI"}>OPI</MenuItem>
                    <MenuItem value={"Catrice"}>Catrice</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required label="Preis" fullWidth variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="hemafrei"
                />
            </Grid>
        </Grid>
    );
}

export default MyForm;

