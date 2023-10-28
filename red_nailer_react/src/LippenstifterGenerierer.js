import React from "react";
import { Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button } from "@mui/material";

function MyForm() {
    const [produktNummer, setProduktNummer] = React.useState("");
    const [beschreibung, setBeschreibung] = React.useState("");
    const [hersteller, setHersteller] = React.useState([]);
    const [preis, setPreis] = React.useState(0.0);
    const [farbe, setFarbe] = React.useState("Rot");
    const [vegan, setVegan] = React.useState(false);
    const [errors, setErrors] = React.useState({});
    
    const handleCheckboxChange = (setFunction) => (e) => {
        setFunction(e.target.checked);
    };

    const handleChange = (setFunction) => (e) => {
        setFunction(e.target.value)
    };
    
    const handleSelectChange = (setFunction) => (e) => {
        setFunction(e.target.value)
    };
    
    const validateForm = () => {
        let errorsObj = {}

        if (!produktNummer) errorsObj['produktNummer'] = 'Pflichtfeld';
        if (!farbe) errorsObj['farbe'] = 'Pflichtfeld';
        if (!preis) errorsObj['preis'] = 'Pflichtfeld';

        setErrors(errorsObj);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Produkt Nummer" 
                    fullWidth 
                    value={produktNummer}
                    onChange={handleChange(setProduktNummer)}
                    type='number'
                    error={!!errors.produktNummer}
                    helperText={errors.produktNummer}
                    inputProps={{ "data-testid": "testid-Produkt-Nummer" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Beschreibung"
                    fullWidth 
                    value={beschreibung}
                    onChange={handleChange(setBeschreibung)}
                    error={!!errors.beschreibung}
                    helperText={errors.beschreibung}
                    inputProps={{ "data-testid": "testid-Beschreibung" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hersteller"
                    fullWidth
                    multiple
                    value={hersteller}
                    onChange={handleSelectChange(setHersteller)}
                    error={!!errors.hersteller}
                    helperText={errors.hersteller}
                    inputProps={{ "data-testid": "testid-Hersteller" }}
                >
                    <MenuItem value="alverde">Alverde</MenuItem>
                    <MenuItem value="nyx">Nyx</MenuItem>
                    <MenuItem value="catrice">Catrice</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Preis"
                    fullWidth
                    value={preis}
                    onChange={handleChange(setPreis)}
                    error={!!errors.preis}
                    helperText={errors.preis}
                    type='number'
                    inputProps={{ "data-testid": "testid-Preis" }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Farbe"
                    fullWidth 
                    select
                    value={farbe}
                    onChange={handleChange(setFarbe)}
                    error={!!errors.farbe}
                    helperText={errors.farbe}
                    inputProps={{ "data-testid": "testid-Farbe" }}
                >
                    <MenuItem value="rot">Rot</MenuItem>
                    <MenuItem value="nude">Nude</MenuItem>
                    <MenuItem value="transparent">Transparent</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={vegan} onChange={handleCheckboxChange(setVegan)} />}
                    label="Vegan"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={validateForm} style={{ marginRight: "10px" }}>Speichern</Button>
                <Button variant="contained">Abbrechen</Button>
            </Grid>
        </Grid>
    );
}

export default MyForm