import React from "react";
import { Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button } from "@mui/material";

function MyForm() {
    const [produktNummer, setProduktNummer] = React.useState("");
    const [beschreibung, setBeschreibung] = React.useState("");
    const [hersteller, setHersteller] = React.useState([]);
    const [preis, setPreis] = React.useState("");
    const [farbe, setFarbe] = React.useState("Rot");
    const [vegan, setVegan] = React.useState(false);
    const [errors, setErrors] = React.useState({});
  
    const handleChange = (setFunction) => (e) => {
        setFunction(e.target.value);
    };
  
    const handleCheckboxChange = (setFunction) => (e) => {
        setFunction(e.target.checked);
    };
  
    const validateForm = () => {
        let errorsObj = {}
  
        if (!produktNummer) errorsObj['produktNummer'] = 'Pflichtfeld';
        if (!preis) errorsObj['preis'] = 'Pflichtfeld';
        if (!farbe) errorsObj['farbe'] = 'Pflichtfeld';
  
        setErrors(errorsObj);
    };
  
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField  
                    label="Produkt-Nummer" 
                    fullWidth  
                    value={produktNummer}
                    onChange={handleChange(setProduktNummer)}
                    error={!!errors.produktNummer}
                    helperText={errors.produktNummer}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    label="Beschreibung"
                    fullWidth
                    value={beschreibung}
                    onChange={handleChange(setBeschreibung)}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hersteller"
                    fullWidth
                    multiple
                    value={hersteller}
                    onChange={handleChange(setHersteller)}
                >
                    <MenuItem value="Alverde">Alverde</MenuItem>
                    <MenuItem value="Nyx">Nyx</MenuItem>
                    <MenuItem value="Catrice">Catrice</MenuItem>
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
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Farbe"
                    fullWidth
                    value={farbe}
                    onChange={handleChange(setFarbe)}
                    error={!!errors.farbe}
                    helperText={errors.farbe}
                >
                    <MenuItem value="Rot">Rot</MenuItem>
                    <MenuItem value="Nude">Nude</MenuItem>
                    <MenuItem value="Transparent">Transparent</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={vegan} onChange={handleCheckboxChange(setVegan)}/>} 
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