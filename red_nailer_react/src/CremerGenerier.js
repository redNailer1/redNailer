import React from "react";
import {Checkbox, FormControlLabel, Grid, MenuItem, Select, TextField, Button} from "@mui/material";

function MyForm() {
    const [name, setName] = React.useState("");
    const [hautform, setHautform] = React.useState([]);
    const [sonnenschutz, setSonnenschutz] = React.useState("");
    const [beschreibung, setBeschreibung] = React.useState("");
    const [hersteller, setHersteller] = React.useState([]);
    const [preis, setPreis] = React.useState(0.0);
    const [tierversuchsfrei, setTierversuchsfrei] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    const handleChange = (setFunction) => (e) => { setFunction(e.target.value); };
    const handleCheckboxChange = (setFunction) => (e) => { setFunction(e.target.checked); };

    const validateForm = () => {
        let errorsObj = {};

        if (!name) errorsObj['name'] = 'Pflichtfeld';
        if (!hautform.length) errorsObj['hautform'] = 'mindestens eine Hautform auswählen';
        if (!hersteller.length) errorsObj['hersteller'] = 'mindestens ein Hersteller auswählen';
        if (!preis) errorsObj['preis'] = 'Pflichtfeld';

        setErrors(errorsObj);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Name" 
                    fullWidth 
                    value={name}
                    onChange={handleChange(setName)}
                    error={!!errors.name}
                    helperText={errors.name} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hautform"
                    fullWidth
                    multiple
                    value={hautform}
                    onChange={handleChange(setHautform)}
                    error={!!errors.hautform}
                    helperText={errors.hautform}>
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="trocken">Trocken</MenuItem>
                    <MenuItem value="Mischhaut">Mischhaut</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Sonnenschutz" 
                    fullWidth 
                    value={sonnenschutz}
                    onChange={handleChange(setSonnenschutz)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                    label="Beschreibung"
                    fullWidth
                    value={beschreibung}
                    onChange={handleChange(setBeschreibung)} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select
                    label="Hersteller"
                    fullWidth
                    value={hersteller}
                    onChange={handleChange(setHersteller)}
                    error={!!errors.hersteller}
                    helperText={errors.hersteller}>
                    <MenuItem value="Nivea">Nivea</MenuItem>
                    <MenuItem value="Dove">Dove</MenuItem>
                    <MenuItem value="Alverde">Alverde</MenuItem>
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
                    helperText={errors.preis} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControlLabel 
                    control={<Checkbox color="primary" checked={tierversuchsfrei} onChange={handleCheckboxChange(setTierversuchsfrei)} />} 
                    label="Tierversuchsfrei" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={validateForm} style={{ marginRight: "10px" }}>Speichern</Button>
                <Button variant="contained">Abbrechen</Button>
            </Grid>
        </Grid>
    );
}

export default MyForm