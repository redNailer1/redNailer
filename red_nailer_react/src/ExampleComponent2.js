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
            <Grid item xs={12}>
                <TextField requiredc label="Name" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Select
                required
                label="Effekt"
                fullWidth
                variant="outlined"
                value={selectedEffekt}
                onChange={handleEffektChange}
                multiple
            >
                <MenuItem value={"Volumen"}>Volumen</MenuItem>
                <MenuItem value={"Repair"}>Repair</MenuItem>
                <MenuItem value={"Glanz"}>Glanz</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField label="Einwirkzeit" fullWidth variant="outlined" type="number" />
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
                    <MenuItem value={"Wella"}>Wella</MenuItem>
                    <MenuItem value={"Schwarzkopf"}>Schwarzkopf</MenuItem>
                    <MenuItem value={"Plantur"}>Plantur</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required label="Preis" fullWidth variant="outlined" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label="silikonfrei"
                />
            </Grid>
        </Grid>
    );
}

export default MyForm;

