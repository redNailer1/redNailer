import React from "react";
import { Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button } from "@mui/material";

function MyForm() {
    const [farbe, setFarbe] = React.useState("Rot");
    const [hersteller, setHersteller] = React.useState([]);
    const [dauerDerManikure, setDauerDerManikure] = React.useState("");
    const [beschreibung, setBeschreibung] = React.useState("");
    const [preis, setPreis] = React.useState(0.0);
    const [hemafrei, setHemafrei] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (setFunction) => (e) => {
        setFunction(e.target.value);
    };

    const handleCheckboxChange = (setFunction) => (e) => {
        setFunction(e.target.checked);
    };

    const validateForm = () => {
        let errorsObj = {}

        if (!farbe) errorsObj['farbe'] = 'Pflichtfeld';
        if (!hersteller.length) errorsObj['hersteller'] = 'mindestens ein Hersteller auswählen';
        if (beschreibung.length > 10) errorsObj['beschreibung'] = 'maximale Länge: 10';
        if (!preis) errorsObj['preis'] = 'Pflichtfeld';

        setErrors(errorsObj);
    };

    return (
        <Grid container spacing={2}> 
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Farbe"
                    fullWidth 
                    select
                    value={farbe}
                    onChange={handleChange(setFarbe)}
                    error={!!errors.farbe}
                    helperText={errors.farbe}
                    inputProps={{ 'data-testid': 'testid-Farbe' }}
                >
                    <MenuItem value="Rot">Rot</MenuItem>
                    <MenuItem value="Gelb">Gelb</MenuItem>
                    <MenuItem value="Blau">Blau</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Dauer der Maniküre"
                    fullWidth 
                    value={dauerDerManikure}
                    onChange={handleChange(setDauerDerManikure)}
                    type='number'
                    inputProps={{ 'data-testid': 'testid-Dauer der Maniküre' }}
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
                    inputProps={{ 'data-testid': 'testid-Beschreibung' }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hersteller"
                    fullWidth
                    multiple
                    value={hersteller}
                    onChange={handleChange(setHersteller)}
                    error={!!errors.hersteller}
                    helperText={errors.hersteller}
                    inputProps={{ 'data-testid': 'testid-Hersteller' }}
                >
                    <MenuItem value="Essie">Essie</MenuItem>
                    <MenuItem value="OPI">OPI</MenuItem>
                    <MenuItem value="Catrice">Catrice</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Preis"
                    fullWidth
                    value={preis}
                    onChange={handleChange(setPreis)}
                    type='number'
                    error={!!errors.preis}
                    helperText={errors.preis}
                    inputProps={{ 'data-testid': 'testid-Preis' }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={hemafrei} onChange={handleCheckboxChange(setHemafrei)}/>} 
                    label="Hemafrei"
                    inputProps={{ 'data-testid': 'testid-hemafrei' }}
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