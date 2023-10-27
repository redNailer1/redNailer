import React from "react";
import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField} from "@mui/material";

function MyForm() {
    const [selectedHautform, setSelectedHautform] = React.useState([]);
    const [selectedHersteller, setSelectedHersteller] = React.useState([]);

    const handleHautformChange = (e) => {
        setSelectedHautform(e.target.value);
    }

    const handleHerstellerChange = (e) => {
        setSelectedHersteller(e.target.value);
    }

    return (
        <Grid container spacing={2} style={{ padding: "20px" }}>
            <Grid item xs={12}>
                <TextField required label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    label="Hautform"
                    select
                    variant="outlined"
                    value={selectedHautform}
                    onChange={handleHautformChange}
                    fullWidth
                >
                    <MenuItem value={"normal"}>Volumen</MenuItem>
                    <MenuItem value={"trocken"}>Repair</MenuItem>
                    <MenuItem value={"Mischhaut"}>Glanz</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Sonnenschutz"
                    />
            </Grid>
            <Grid item xs={12}>
                <TextField label="Beschreibung" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    label="Hersteller"
                    select
                    value={selectedHersteller}
                    onChange={handleHerstellerChange}
                    fullWidth
                    variant="outlined"
                >
                    <MenuItem value={"Nivea"}>Nivea</MenuItem>
                    <MenuItem value={"Dove"}>Dove</MenuItem>
                    <MenuItem value={"Alverde"}>Alverde</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required label="Preis" fullWidth variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="Tierversuchsfrei"
                />
            </Grid>
        </Grid>
    );
}

export default MyForm;

